//Dependencies
var express     = require('express');
var path        = require('path');
var exphbs      = require('express-handlebars');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var request     = require('request');
var cheerio     = require('cheerio');


//Initialize Apps
var app         = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res){
    res.render('home', {title: 'My Scraper!', condition:false}); 
}); 

app.listen(app.get('port'), function(){
    console.log('Server is starter on ' +app.get('port'));
});
//Set Up 404 
app.use(function(req,res){
	res.status(404);
	res.render('404');
});

//MongoDB connection developement
mongoose.connect('mongodb://localhost/myscrape');

mongoose.connection.once('open', function(){
    console.log('Connection has been made');
}).on('error', function(error){
    console.log('Connection error:', error);
});

