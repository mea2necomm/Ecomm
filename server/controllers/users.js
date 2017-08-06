/**
 * Created by jacob on 8/6/2017.
 */


var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


module.exports.getUsers = function(req,res){
  console.log('getcart called');
  getAuthor(req,res,function(req, res, username) {
    console.log("getting cart from db for user..." + req.params.useremail);
    // console.log(JSON.stringify(req.body));

    User.find({}).exec(function(error, users){
      // console.log("usercartitems: " + usercartitems);
      if(error)
        sendJSONresponse(res,404,error);
      if(!users)
        sendJSONresponse(res,200,[]);
      else
        sendJSONresponse(res,200,users);

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

