// Include Express
var express = require('express');
// Initialize the Router
var router = express.Router();

var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Lookbooks = db.lookbooks;
var users = db.users;

// Setup the Route for the find All
router.get('/', function (req, res, next) {

    // show the request body in the command line
    console.log('Get the lookBooks');
    
    // Current time this occurred
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

     Lookbooks.find({}, function (err, datas) {

   		 if (err) {
   		 	   	console.log(color.red('Erreur survenue lors de la recherche de Look Books à ' + time) + 'à cause de l\'erreur suivante'+color.red(err));

   		 		// send the error
	            res.status(500).json({
	                'message': 'Erreur survenue lors de la recherche de Look Books'
	            });
   		 	}else{
		   		console.log(color.green('Restitution de la liste de look Book le ' + time));
		    	res.json(datas);
		    }
  	});
});


// Expose the module
module.exports = router;