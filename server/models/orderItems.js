
var mongoose = require( 'mongoose' );

var cartItemSchema = new mongoose.Schema({
  country: String,
  state: String,
  city: String,
  fromYear: Number,
  fromMonth: Number,
  fromDay: Number,
  toYear: Number,
  toMonth: Number,
  toDay: Number
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
  cartItems:[cartItemSchema],
  total: {
    type: Number,
    required: true
  },
  date: {
    type: String
  }
});


mongoose.model('Order', orderSchema);

