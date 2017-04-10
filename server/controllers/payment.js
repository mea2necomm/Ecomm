var paypal = require('paypal-rest-sdk');
var config = {};

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

exports.init = function(c){
  config = c;
  paypal.configure(c.api);
};

exports.create = function (req, res) {

  console.log(req.body);
  var payment = {
    "intent": "sale",
    "payer": {
    },
    "transactions": [{
      "amount": {
        "currency": "USD",
        "total": req.body.total
      },
      "description": "Payment towards holidays"
    }]
  };
  console.log(payment);
  console.log(req.body.method);
  var method = req.body.method;
  if(method == 'credit'){
    console.log("in if");
    var funding_instruments = [
      {
        "credit_card": {
          "type": req.body.type,
          "number": req.body.cnum,
          "expire_month": req.body.expmon,
          "expire_year": req.body.expyear,
          "first_name": req.body.fname,
          "last_name": req.body.lname
        }
      }
    ];
    payment.payer.payment_method = 'credit_card';
    payment.payer.funding_instruments = funding_instruments;
    console.log(payment);
  }
  paypal.payment.create(payment,function (error, payment) {
    if(error){
      console.log(error);
    }else {
      console.log('response: ');
      console.log(payment);
      res.send(payment);
    }
  });
};

exports.get = function (req, res) {
  var paymentid = 'PAY-7DB078714V269580XLDSBLYQ';
  paypal.payment.get(paymentid, function (error, payment) {
    if (error){
      console.log(error);
    }else {
      res.send(payment);
    }
  });

};

