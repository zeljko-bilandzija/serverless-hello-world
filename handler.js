'use strict';

module.exports.hello = async event => {
    const name = event.queryStringParameters && event.queryStringParameters.name;
    const message = `Hello ${name || 'World'}`;

    return {
        statusCode: 200,
        body: JSON.stringify({ message }, null, 2),
    };
};
