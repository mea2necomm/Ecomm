/**
 * Created by jacob on 8/5/2017.
 */

var mongoose = require( 'mongoose' );

var pricingSchema = new mongoose.Schema({
  countryPrice: Number,
  statePrice: Number,
  cityPrice: Number,
  minPrice: Number
});

mongoose.model("Pricing",pricingSchema);

