const scraper   = require('../scraper'); 
const url       = 'http://imgur.com/gallery/hj4NW'; 

//Callback
scraper.imgScrape(url, (data)=>{
    console.log('data from scraper received');
    console.log(data);
}); 