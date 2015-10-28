// Include Express
var express = require('express');
// Initialize the Router
var router = express.Router();

var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Lookbooks = db.lookbooks;

// Setup the route for
router.get('/:id', function (req, res, next) {

    // show the request body in the command line
    console.log('Get one lookBooks '+req.params.id);
    
    // Current time this occurred
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

    Lookbooks.findById(req.params.id, function (err, data) {

       if (err) {
            console.log(color.red('Erreur survenue lors de la recherche du look book n°'+req.params.id+' le ' + time) + 'à cause de l\'erreur suivante'+color.red(err));

          // send the error
              res.status(500).json({
                  'message': 'Erreur survenue lors de la recherche du Look Book'
              });
        }else{
          console.log(color.green('Restitution du look Book n° '+req.params.id+' le ' + time));
          res.json(data);
        }
    });
});

// Expose the module
module.exports = router;