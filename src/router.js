'use strict';

module.exports = function (app) {
    require('./api/api.router')(app);
};