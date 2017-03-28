const express = require('express');
const router = express.Router();
const request = require('request');

// declare axios for making http requests
const API = 'https://jsonplaceholder.typicode.com';
const baseURL = 'http://www.worldholidaysandevents.com/HolidaysRESTJSON/webresources/holidaysandevents'
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
          }

            if (apires.statusCode != 200 ) {
              res.status(apires.statusCode).send(apires.statusCode);
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
          }

            if (apires.statusCode != 200 ) {
              res.status(apires.statusCode).send(apires.statusCode);
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
          }

            if (apires.statusCode != 200 ) {
              res.status(apires.statusCode).send(apires.statusCode);
            }

            res.status(200).send(body);
        }
      );  
});

module.exports = router;