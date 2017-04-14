var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};



module.exports.saveOrder = function(req,res){
  console.log('saveOrders called');
  getAuthor(req,res, function(req, res,username) {
    console.log("saving order to db...");
    if(!req.body || !req.body.useremail || !req.body.paymentid || !req.body.cartItems || !req.body.total) {
      console.log("Error while saving order to db: all fields required");
      sendJSONresponse(res, 400, {
        "message": "All fields required"
      });
      return;
    }


    var order = new Order();
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
      dd='0'+dd
    }

    if(mm<10) {
      mm='0'+mm
    }

    today = mm+'/'+dd+'/'+yyyy;

    order.paymentid = req.body.paymentid;
    order.useremail = req.body.useremail;
    order.cartItems = req.body.cartItems;
    order.total = req.body.total;
    order.date = today;

    order.save(function(err) {
      if (err) {
        console.log("error while saving order to db: "+ err);
        sendJSONresponse(res, 404, err);
      } else {
        console.log("saved order to db successfully");
        sendJSONresponse(res, 200, {
          "result" : "order saved successfully"
        });
      }
    });

  })};



module.exports.getOrders = function(req,res){
  console.log('getOrders called');
  getAuthor(req,res, function(req, res,username) {

    console.log("getting orders from db for user..." + req.params.useremail);
    // console.log(JSON.stringify(req.body));
    if(!req.params || !req.params.useremail ) {
      console.log("Error while getting cart from db: useremail missing");
      sendJSONresponse(res, 400, {
        "message": "All fields required"
      });
      return;
    }

    Order.find({useremail:req.params.useremail}).exec(function(error, userorders){
      // console.log("userorders: " + userorders);
      if(error)
        sendJSONresponse(res,404,error);
      if(!userorders)
        sendJSONresponse(res,200,[]);
      else
        sendJSONresponse(res,200,userorders);

    });

  })};



var getAuthor = function(req, res, callback) {
  console.log("reached getAuthor");
  console.log("Finding author with email " + req.payload.email);
  if (req.payload.email) {
    User
      .findOne({ email : req.payload.email })
      .exec(function(err, user) {
        if (!user) {
          console.log("user not found");
          sendJSONresponse(res, 404, {
            "message": "User not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log("user found");
        callback(req, res, user.email);
      });

  } else {
    sendJSONresponse(res, 404, {
      "message": "User not found"
    });
    return;
  }

};
