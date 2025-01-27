
export const handler = async (event) => {
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
  };
  import AWS from 'aws-sdk';
  
  // Create a DynamoDB document client
  const awsddbdc = new AWS.DynamoDB.DocumentClient({ apiVersion: '2015-03-31' });
  
  export const handler = async (event) => {
      try {
          // Extract Path Parameters
          const { id } = event.pathParameters;
  
          // Query Parameters
          const params = {
              TableName: 'Pizza',
              Key: { id }
          };
  
          // Fetch Data from DynamoDB
          const data = await awsddbdc.get(params).promise();
  
          return {
              statusCode: 200,
              body: JSON.stringify(data.Item),
          };
      } catch (error) {
          console.error('Error fetching data:', error);
          return {
              statusCode: 500,
              body: JSON.stringify({ error: 'Could not fetch the item' }),
          };
      }
  };
  