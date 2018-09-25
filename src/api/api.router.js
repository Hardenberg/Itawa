'use strict';

let controller = require('./controllers/api.controller');

module.exports = function (app) {
    app.post('/api/', controller.addInquiryAction);
};