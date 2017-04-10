

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
const API = 'https://jsonplaceholder.typicode.com';
const baseURL = 'http://www.worldholidaysandevents.com/HolidaysRESTJSON/webresources/holidaysandevents';
const contriesUrl = baseURL+'/countries';
const statesUrl = baseURL+'/countryStates/';
const citiesUrl = baseURL+'/countryStateCities/';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

/*// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});
*/

router.get('/posts', (req, res) => {

  request.get(
        { url: 'https://jsonplaceholder.typicode.com/posts',
        method:'Get'
        },
        function (error, apires, body) {
          if (error) {
          	res.status(500).send(error);
          }

            if (apires.statusCode != 200 ) {
              res.status(apires.statusCode).send(apires.statusCode);
            }

            res.status(200).json(body);
        }
      );

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

router.post('/shoppingcart',ctrlShoppingCart.saveCart);
router.get('/shoppingcart/:useremail',ctrlShoppingCart.getShoppingCart);

router.post('/register',ctrlAuth.register);
router.post('/login',ctrlAuth.login);

router.post('/create',paypal.create);

router.post('/orders', orders.saveOrder);

router.get('/orders/:useremail', orders.getOrders);

module.exports = router;
