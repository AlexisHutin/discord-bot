const Request = require('request');
const config = require('@config');
const baseUrl = config.hassio.baseUrl;
const webhooks = config.hassio.webhooks;


const triggerHook = () => {
    const uri = baseUrl + webhooks.testHookId;
    Request.post(uri);
};

module.exports = { triggerHook };