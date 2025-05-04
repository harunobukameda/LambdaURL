/**
 * Simple test script for the Lambda function
 * Run with: node test-local.js
 */

import { handler } from './index.mjs';

// Mock Lambda event object
const mockEvent = {
  version: '2.0',
  routeKey: '$default',
  rawPath: '/',
  rawQueryString: '',
  headers: {
    'accept': '*/*',
    'content-length': '0',
    'host': 'localhost:3000',
    'user-agent': 'curl/7.79.1',
    'x-forwarded-proto': 'http',
    'x-forwarded-port': '3000'
  },
  requestContext: {
    accountId: '123456789012',
    apiId: 'local',
    http: {
      method: 'GET',
      path: '/',
      protocol: 'HTTP/1.1',
      sourceIp: '127.0.0.1',
      userAgent: 'curl/7.79.1'
    },
    requestId: 'test-request-id',
    routeKey: '$default',
    stage: '$default',
    time: new Date().toISOString(),
    timeEpoch: Date.now()
  },
  isBase64Encoded: false
};

// Execute the Lambda function
async function runTest() {
  try {
    console.log('Testing Lambda function locally...');
    const response = await handler(mockEvent);
    console.log('Response:');
    console.log(JSON.stringify(response, null, 2));
    
    // Verify the response
    if (response.statusCode === 200) {
      console.log('\n✅ Test passed!');
    } else {
      console.log('\n❌ Test failed: Unexpected status code');
    }
  } catch (error) {
    console.error('\n❌ Test failed with error:');
    console.error(error);
  }
}

runTest();
