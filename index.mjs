/**
 * AWS Lambda function with URL endpoint
 * This function returns a simple greeting message
 * 
 * @param {Object} event - Lambda event object
 * @returns {Object} HTTP response object
 */
export const handler = async (event) => {
  // Log the incoming request (for debugging)
  // console.log('Event:', JSON.stringify(event, null, 2));
  
  // Create response with CORS headers
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
    },
    body: JSON.stringify('Hello from Lambda deployed by CircleCI')
  };
  
  return response;
};
