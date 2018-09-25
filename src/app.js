'use strict';

let bodyParser = require('body-parser');

let express = require('express');
let app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

require('./router')(app);

let config = require('./configs/configs.app.config');

app.listen(config.PORT, function () {
    console.log('Server listen on Port ' + config.PORT);
});