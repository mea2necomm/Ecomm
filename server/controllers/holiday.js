var mongoose = require('mongoose');
var User = mongoose.model('User');
const request = require('request');

const baseURL = 'http://www.worldholidaysandevents.com/HolidaysRESTJSON/webresources/holidaysandevents';
const holidaysUrl = baseURL+'/holidaysAndEvents/';

module.exports.findfreeholidays = function (req, res) {
  console.log("free holidays");
  console.log(req.params.todate);
  if(req.params.todate <= new Date().getFullYear()){
    console.log('show full hols');
    request.get(
      { url: holidaysUrl+ req.params.country+'/'+req.params.state+'/'+req.params.city+'/'+req.params.fromdate+'/1/1/'+req.params.todate+'/12/31',
        method:'Get'
      },
      function (error, apires, body) {
        if (error) {
          res.status(500).send(error);
          return;
        }

        if (apires.statusCode != 200 ) {
          res.status(apires.statusCode).send(apires.statusCode);
          return;
        }

        res.status(200).send(body);
      }
    );
  } else {
    console.log('throw error');
    res.status(401).send({'errormessage': 'Invalid Dates'})
  }

};

module.exports.findHolidays = function(req,res){
  console.log('called the correct function');
  getAuthor(req,res, function(req,res, userName){
    request.get(
      { url: holidaysUrl+ req.params.country+'/'+req.params.state+'/'+req.params.city+'/'+req.params.fromdate+'/1/1/'+req.params.todate+'/12/31',
        method:'Get'
      },
      function (error, apires, body) {
        if (error) {
          res.status(500).send(error);
          return;
        }

        if (apires.statusCode != 200 ) {
          res.status(apires.statusCode).send(apires.statusCode);
          return;
        }

        res.status(200).send(body);
      }
    );
  });

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
        console.log(user);
        callback(req, res, user.email);
      });

  } else {
    sendJSONresponse(res, 404, {
      "message": "User not found"
    });
    return;
  }

};
