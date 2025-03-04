
// Bring in the AWS library
var AWS = require('aws-sdk');

// Create DynamoDB document client
exports.handler = async (event, context) => {
    var awsddb = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

    // Path Parameters
    // const { id } = event.pathParameters;

    // Query Parameters
    var params = {
        TableName: 'Pizza',
        Key: {
            // id: id
            id: '1'
        }
    };

    const data = await awsddb.get(params).promise();
    const response = {
        statusCode: '200',
        body: JSON.stringify(data.Item)
    };

    return response;
};