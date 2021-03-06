/*var express = require('express');
var router = express.Router();*/

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;*/


/**
 * The Index of Routes
 */

 module.exports = function (app) {
	  // The signup route
     app.use('/signup', require('./routes/signup'));
     // La liste des articles
     app.use('/getListArticles', require('./routes/getListArticles'));
     // La liste des lookBook
     app.use('/loadBook', require('./routes/loadBook'));
     // La liste des lookBook
     app.use('/showAlook', require('./routes/showAlook'));
 }