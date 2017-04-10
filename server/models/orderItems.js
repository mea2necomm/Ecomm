/**
 * Created by jacob on 4/6/17.
 */
var mongoose = require( 'mongoose' );
<<<<<<< HEAD
=======

>>>>>>> 6835a2bc09ab2a6e2d752af0db9148fdfba8df45
/*
 export interface SearchQuery{
 country:string,
 state:string,
 city:string,
 fromYear:Number,
 toYear:Number
 }
 * */
<<<<<<< HEAD
=======

>>>>>>> 6835a2bc09ab2a6e2d752af0db9148fdfba8df45
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

