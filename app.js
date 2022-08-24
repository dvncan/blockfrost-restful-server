var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var blockfrost = require('./mods/blockfrost');
var port = 3000;


var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/', (req,res) => {
    async function dad(){
        var data = await blockfrost.runExample();
        res.send(data).status(200);
    }
    dad(); 
})

app.listen(port, () => {
    console.log(`app.js listening on port ${port}`)
})
