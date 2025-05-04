# Lambda URL Deployment with CircleCI

This repository contains a simple AWS Lambda function that is automatically deployed with a function URL using CircleCI.

## Project Structure

- `index.mjs` - The Lambda function code
- `.circleci/config.yml` - CircleCI configuration for automated deployment

## How It Works

The CircleCI configuration automatically deploys the Lambda function with a function URL whenever changes are pushed to the main branch. The deployment process:

1. Installs and configures the AWS CLI
2. Creates a deployment package (zip file) containing the Lambda function
3. Checks if the Lambda function already exists:
   - If it doesn't exist, creates a new function and configures a function URL
   - If it exists, updates the function code and ensures a function URL is configured
4. Displays the function URL in the CircleCI job output

## Required Environment Variables

You need to set up the following environment variables in your CircleCI project settings:

- `AWS_ACCESS_KEY_ID` - Your AWS access key ID
- `AWS_SECRET_ACCESS_KEY` - Your AWS secret access key
- `AWS_REGION` - The AWS region to deploy to (e.g., `us-east-1`)
- `AWS_LAMBDA_ROLE_ARN` - The ARN of the IAM role for the Lambda function

## IAM Role Requirements

The IAM role specified by `AWS_LAMBDA_ROLE_ARN` should have the following permissions:

- `AWSLambdaBasicExecutionRole` - For CloudWatch Logs access
- Permission to create and manage function URLs

## Testing the Deployed Function

Once deployed, you can access your Lambda function via the function URL displayed in the CircleCI job output. The URL will look something like:

```
https://abcdefghij.lambda-url.us-east-1.on.aws/
```

You can test it with a simple curl command:

```bash
curl https://your-function-url/
```

The response should be:

```
"Hello from Lambda deployed by CircleCI!"
```

## Local Development

To test the Lambda function locally before pushing changes:

1. Install the AWS SAM CLI
2. Create a `template.yaml` file for SAM
3. Run `sam local start-api`

## Security Considerations

The function URL is configured with `NONE` authentication type, which means it's publicly accessible. For production use, consider:

- Using `AWS_IAM` authentication type instead
- Implementing additional authorization in your Lambda function
- Setting up proper CORS configuration if needed
