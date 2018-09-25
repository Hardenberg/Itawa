'use strict';

module.exports = {
    addInquiryAction:addInquiryAction
};

function addInquiryAction(req, res) {
    res.status(200).send('');

    let model = {};

    model.text = req.body.text;
    model.subject = req.body.subject;
    model.type = req.body.type;
    model.owner = req.body.owner;

    let service = require('../services/api.inquiry.services');
    service.addInquiry(model);
}