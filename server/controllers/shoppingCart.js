var mongoose = require('mongoose');
var ShoppingCart = mongoose.model('ShoppingCart');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.saveCart = function(req,res){
  console.log('savecart called');
  getAuthor(req,res,function(req, res,username) {
    console.log("saving cart to db...");
    if(!req.body || !req.body.useremail || !req.body.cartItems) {
      console.log("Error while saving cart to db: all fields required");
      sendJSONresponse(res, 400, {
        "message": "All fields required"
      });
      return;
    }

    // remove existing cart if any
    ShoppingCart.remove({useremail:req.body.useremail}).exec();

    var shoppingCart = new ShoppingCart();

    shoppingCart.useremail = req.body.useremail;
    shoppingCart.cartItems = req.body.cartItems;

    shoppingCart.save(function(err) {
      if (err) {
        console.log("error while saving cart to db: "+ err);
        sendJSONresponse(res, 404, err);
      } else {
        console.log("saved cart to db successfully");
        sendJSONresponse(res, 200, {
          "result" : "cart saved successfully"
        });
      }
    });

  })
};



module.exports.getShoppingCart = function(req,res){
  console.log('getcart called');
  getAuthor(req,res,function(req, res, username) {
    console.log("getting cart from db for user..." + req.params.useremail);
    // console.log(JSON.stringify(req.body));
    if(!req.params || !req.params.useremail ) {
      console.log("Error while getting cart from db: useremail missing");
      sendJSONresponse(res, 400, {
        "message": "All fields required"
      });
      return;
    }

    ShoppingCart.findOne({useremail:req.params.useremail}).exec(function(error, usercartitems){
      // console.log("usercartitems: " + usercartitems);
      if(error)
        sendJSONresponse(res,404,error);
      if(!usercartitems)
        sendJSONresponse(res,200,[]);
      else
        sendJSONresponse(res,200,usercartitems.cartItems);

    });

  })
};




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
