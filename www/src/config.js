// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "3t8op37c10t1n1nkcqqedi73hb",     // CognitoClientID
  "api_base_url": "https://7ifpw1ngai.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-api.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d19jj2n3gsqr4l.amplifyapp.com"                                      // AmplifyURL
};

export default config;
