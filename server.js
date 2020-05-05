console.log('server is staring..');

const express = require('express');

let app = express();

let server = app.listen(3000, () => {
    console.log('server is listening..');
});

app.use(express.static('website', {
    setHeaders: (res, path) => {
        res.setHeader('Cache-Control', 'no-cache');
        // set http head to be cacheble but need to be validated before serving
    }
}));


app.get('/homePage', function (req, res) {
    setTimeout( () => {
        res.set('Cache-Control', 'no-store');
        // set dynamic content to be non cacheble to either CDN or browser
        res.sendFile(__dirname + '/views/homePage.html');
    }, 3000);
});