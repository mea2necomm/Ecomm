/**
 * Created by jacob on 8/5/2017.
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Pricing = mongoose.model('Pricing');



var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.getPricing = function(req,res){
  console.log('getPricing called');
  //getAuthor(req,res, function(req, res,username) {


    // console.log(JSON.stringify(req.body));
    console.log(Pricing.collection.collectionName);

    Pricing.findOne({}, function(error, pricings){
      console.log("pricings: " + pricings);
      if(error)
        sendJSONresponse(res,404,error);
      if(!pricings)
        sendJSONresponse(res,200,[]);
      else
        sendJSONresponse(res,200,pricings);

    });

  //})
};


var getAuthor = function(req, res, callback) {
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
