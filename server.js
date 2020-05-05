console.log('server is staring');

const express = require('express');

let app = express();

let server = app.listen(3000, () =>{
    console.log('server is listening');
});

//app.use(express.static('website'));

app.use(express.static('website', {
    setHeaders: (res, path) => {
        res.setHeader('Cache-Control', 'no-cache');
    }
}));


app.get('/homePage', function (req, res) {
    setTimeout( () => {
        res.sendFile(__dirname + '/views/homePage.html');
    }, 3000);
    //res.sendFile(__dirname + '/views/homePage.html');
});