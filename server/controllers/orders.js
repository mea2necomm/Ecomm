var mongoose = require('mongoose');
var Order = mongoose.model('Order');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};



module.exports.saveOrder = function(req, res) {
  console.log("saving order to db...");
  if(!req.body || !req.body.useremail || !req.body.paymentid || !req.body.cartItems) {
    console.log("Error while saving order to db: all fields required");
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }


  var order = new Order();

  order.paymentid = req.body.paymentid;
  order.useremail = req.body.useremail;
  order.cartItems = req.body.cartItems;

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

};
