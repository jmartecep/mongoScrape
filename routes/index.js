//Dependencies
var express     = require('express');
var router      = express.Router();
var path        = require('path');
var exphbs      = require('express-handlebars');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var request     = require('request');
var cheerio     = require('cheerio');
var assert      = require('assert');

var url         = 'mongodb://localhost:3000/test';

//Use external css
app.use(express.static(path.join(__dirname, '../public'))); 

//Get home page
router.get('/', function(req, res, next){
    res.render('../layouts/main');
});

//Route to get data
router.get('/get-data', function(req, res, next){

});//END Get

router.post('/insert', function(req, res, next){

});//END Post

router.post('/update', function(req, res, next){

});//END Update

router.post('/delete', function(req, res, next){

});//END Delete

module.exports  = router;

