'use strict';

module.exports = {
    addInquiry: handleInquiry
};

function handleInquiry(model) {
    const sendmail = require('sendmail')({
        silent: true,
    });

    const config = require('../../configs/configs.app.config');
    sendmail({
        from: config.FROM,
        to: config.TO,
        subject: '[' + model.type + ']  ### ' + model.subject + ' ### ' + model.owner,
        html: model.text,
    }, function(err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
    });
}
