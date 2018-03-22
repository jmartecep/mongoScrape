const request = require ('request');
const cheerio = require ('cheerio');

//Call Back Example
exports.imgScrape = (url, cb) => {
    request(url,(error, resp, body)=> {
        if(error){
            cb({
                error:error
            });
        }
        let $ = cheerio.load(body);
        let $url = url;
        let $img = $('.post-image img').attr('src');
        let $title = $('.post-title').text();
        let $desc = $('[itemprop=description]').text();
    
    let image = {
        url:$url,
        img: "http:" + $img, 
        title: $title, 
        description: $desc
    }
    //Respon with the final JSON
    console.log('scraped from scraper.js', image);
    cb(image);
});
};
