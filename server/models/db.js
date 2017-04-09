/**
 * Created by jacob on 2/24/17.
 */
var mongoose = require('mongoose');

var dbURI = 'mongodb://mean2necomm:meanecomm@ds147070.mlab.com:47070/mean2necomm';
if(process.env.NODE_ENV === 'production'){
    dbURI = process.env.MONGOLAB_URI;
}

mongoose.connect(dbURI);

//logging event handlers
mongoose.connection.on('connected', function(){
   console.log('Mongoose connected to ' + dbURI)
});

mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error: ' + err)
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected from ' + dbURI)
});

// Function to close the connections when the application
// is stopped.
var gracefulShutdown = function (msg, callback){
    mongoose.connection.close( function (){
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

// for nodemon restarts
process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// for app termination
process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
        process.exit(0);
    });
});

// for heroku app termination
process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app shutdown', function () {
        process.exit(0);
    });
});

require('./users');
require('./cartItems');
