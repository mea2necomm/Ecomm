

const express = require('express');
const router = express.Router();
var jwt = require('express-jwt');

var auth = jwt({
  secret:process.env.JWT_SECRET,
  userProperty: 'payload'
});

//controller routes to authentication pages
var ctrlAuth = require('../controllers/authentication');
var ctrlHoliday = require('../controllers/holiday');
var ctrlShoppingCart = require('../controllers/shoppingCart');
var paypal = require('../controllers/payment');
var orders = require('../controllers/orders');
const request = require('request');

// declare axios for making http requests
const baseURL = 'http://www.worldholidaysandevents.com/HolidaysRESTJSON/webresources/holidaysandevents';
const contriesUrl = baseURL+'/countries';
const statesUrl = baseURL+'/countryStates/';
const countryCitiesUrl = baseURL+'/countryCities/';
const citiesUrl = baseURL+'/countryStateCities/';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/countries', (req, res) => {
  request.get(
        { url: contriesUrl,
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

router.get('/countryStates/:country', (req, res) => {
  request.get(
        { url: statesUrl+req.params.country,
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

router.get('/countryCities/:country', (req, res) => {
  request.get(
    { url: countryCitiesUrl+req.params.country,
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

router.get('/countryStateCities/:state/:country', (req, res) => {
  request.get(
        { url: citiesUrl+ req.params.country+'/'+req.params.state,
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
router.get('/currentyear', (req, res) =>{
  var year = { 'year' : new Date().getFullYear()};
  res.status(200).send(year);
});
//added auth to secure the holidays
router.get('/holidays/:country/:state/:city/:fromdate/:todate', auth,
  ctrlHoliday.findHolidays);

router.get('/freeholidays/:country/:state/:city/:fromdate/:todate', ctrlHoliday.findfreeholidays);

router.post('/shoppingcart',auth, ctrlShoppingCart.saveCart);
router.get('/shoppingcart/:useremail', auth, ctrlShoppingCart.getShoppingCart);

router.post('/register',ctrlAuth.register);
router.post('/login',ctrlAuth.login);

router.post('/create',paypal.create);

router.post('/orders', auth, orders.saveOrder);

router.get('/orders/:useremail', auth, orders.getOrders);

router.get('/payment/:paymentid', paypal.get);

module.exports = router;
