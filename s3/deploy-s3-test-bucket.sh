#!/usr/bin/env bash
set -e 

ACCOUNT_ID=$(aws sts get-caller-identity --query 'Account' --output text)

# Application specific variables
# TARGET ACCOUNT ID GRAAIFNEN KÄYTTÖLIITTYMÄ NIMEN JÄLKEEN. VIIVAT POIS
TARGET_ACCOUNT_ID="177244120069"
REGION="eu-west-1"
TEMPLATE_FILE="s3-test-bucket.yaml"
# cloudformation stack name. näkyy graafisest liittymästä
STACK_NAME="s3-test-bucket"

if [ "$TARGET_ACCOUNT_ID" != "$ACCOUNT_ID" ]; then
    echo "Incorrect account, get SSO credentials for deploy account"
    exit 1
fi



aws cloudformation deploy \
  --stack-name "$STACK_NAME"  \
  --template-file "${TEMPLATE_FILE}" \
  --region "$REGION"



#   JOS ei anna ajaa muista vaihtaa chmod 700