/**
 * Created by jacob on 4/6/17.
 */
var mongoose = require( 'mongoose' );
require('./cartItems');
/*
 export interface SearchQuery{
 country:string,
 state:string,
 city:string,
 fromYear:Number,
 toYear:Number
 }
 * */



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

