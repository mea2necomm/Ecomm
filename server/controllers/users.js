/**
 * Created by jacob on 8/6/2017.
 */


var mongoose = require('mongoose');
var User = mongoose.model('User');
const uuidv1 = require('uuid/v1');
const nodemailer = require('nodemailer');


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


module.exports.getUserByUUID = function(req,res){
  console.log('getuserbyuuid called');

    console.log("getting user by uuid..." + req.params.requesteduuid);
    // console.log(JSON.stringify(req.body));

    if(!req.params || !req.params.requesteduuid){
      sendJSONresponse(res,400,"request does not have uuid");
    }
    User.findOne({resetuuid :req.params.requesteduuid}).exec(function(error, user){
      // console.log("usercartitems: " + usercartitems);
      if(error)
        sendJSONresponse(res,404,error);
      if(!user)
        sendJSONresponse(res,200,null);
      else
        sendJSONresponse(res,200,user);

    });


};

module.exports.changePassword = function(req,res){
  console.log('changePassword called');

    console.log(req.body);
    if(!req.body.requesteduuid || !req.body.password) {
      console.log("Error while change password: uuid needed");
      sendJSONresponse(res, 400, {
        "message": "All fields required"
      });
      return;
    }

    console.log("updating password for ..." + req.body.requesteduuid + " with " + req.body.password);

  User
    .findOne({ resetuuid :req.body.requesteduuid })
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
      user.resetuuid = null;
      user.resetdate = new Date();
      user.setPassword(req.body.password);
      user.save(function(err){
        if(err){
          console.log("error while saving reset info to database");
          sendJSONresponse(res, 400, {
            "message": "Unable to save to db"
          });
        }else{
          console.log("saved reset info to database successfully");
          sendJSONresponse(res, 200, {
            "message": "Successfully changed password"
          });
        }
      });
    });


    // console.log(JSON.stringify(req.body));

};

module.exports.resetPassword = function(req,res){
  console.log('resetPassword called');
  getAuthor(req,res,function(req, res, username) {
    console.log(req.body);
    if(!req.body.useremail) {
      console.log("Error while resetting password: User email needed");
      sendJSONresponse(res, 400, {
        "message": "All fields required"
      });
      return;
    }

    console.log("sending reset password mail..." + req.body.useremail);
    // console.log(JSON.stringify(req.body));

    /*send reset email*/

    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'mea2nmailer@gmail.com', // Your email id
        pass: 'starfishwhite' // Your password
      }
    });

    var host = req.get('host');
    var tempuuid = uuidv1();
    var tempurl = 'http://' +host + '/changepassword/' + tempuuid;
    var text = 'The password has been reset for <b>' + req.body.useremail + '</b>. Follow the link below to create a new password<br/>';

    text += '<a href="'+ tempurl+ '">'+tempurl + '</a><br/>';

    var mailOptions = {
      from: 'mea2nmailer@gmail.com', // sender address
      to: req.body.useremail, // list of receivers
      subject: 'Reset Password Link from holiday shop' , // Subject line
      html: text //, // plaintext body
      // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        console.log(error);

        sendJSONresponse(res,404,error);
      }else{
        console.log('Message sent: ' + info.response);
        sendJSONresponse(res,200,info.response);
      };
    });

    /*end send email*/

    /*update database with new ssid*/
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
        user.resetuuid = tempuuid;
        user.resetdate = new Date();

        user.save(function(err){
          if(err){
            console.log("error while saving reset info to database");
          }else{
            console.log("saved reset info to database successfully");
          }
        });
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

