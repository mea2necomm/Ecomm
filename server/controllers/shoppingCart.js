var mongoose = require('mongoose');
var ShoppingCart = mongoose.model('ShoppingCart');


module.exports.saveCart = function(req, res) {
  if(!req.body._userid || !req.body.cartItems) {
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  var shoppingCart = new ShoppingCart();

  shoppingCart.useremail = req.body.useremail;
  shoppingCart.cartItems = req.body.cartItems;

  shoppingCart.save(function(err) {
    if (err) {
      sendJSONresponse(res, 404, err);
    } else {
      sendJSONresponse(res, 200, {
        "result" : "cart saved successfully"
      });
    }
  });

};
