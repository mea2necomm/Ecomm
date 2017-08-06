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

