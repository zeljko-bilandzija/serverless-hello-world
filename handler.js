'use strict';
const databaseManager = require('./databaseManager');

function createResponse(statusCode, message) {
    return {
        statusCode,
        body: JSON.stringify(message)
    };
}

module.exports.hello = async event => {
    const name = event.queryStringParameters && event.queryStringParameters.name;
    const message = `Hello ${name || 'World'}`;

    if (name) {
        await databaseManager.saveName(name);
    }

    return createResponse(200, message);
};

module.exports.wasGreeted = async event => {
    const name = event.queryStringParameters && event.queryStringParameters.name;
    const result = await databaseManager.checkName(name);
    return createResponse(200, result)
};