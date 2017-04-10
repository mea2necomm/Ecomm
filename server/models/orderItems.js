
var mongoose = require( 'mongoose' );

var cartItemSchema = new mongoose.Schema({
  country: String,
  state: String,
  city: String,
  fromYear: Number,
  toYear: Number
});


var orderSchema = new mongoose.Schema({
  useremail: {
    type: String,
    required: true
  },
  paymentid: {
    type: String,
    unique: true,
    required: true
  },
  cartItems:[cartItemSchema]
});


mongoose.model('Order', orderSchema);

