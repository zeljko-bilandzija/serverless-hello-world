'use strict'

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.GREETNAMES_TABLE;

module.exports.saveName = name => {
    const params = {
        TableName: TABLE_NAME,
        Item: {
            name
        }
    };

    return dynamo.put(params).promise().then(() => name);
};

module.exports.checkName = name => {
    const params = {
        Key: {
            name
        },
        TableName: TABLE_NAME
    };

    return dynamo.get(params).promise().then(result => result.Item ? "Yes" : 'No');
};