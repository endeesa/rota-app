#!/bin/bash

. ~/.bashrc

here=$(pwd)
cd site
npm run build-prod
cd $here

if [ "$?" -ne 0 ]
then
    echo "Build failed, abort deployment!!"
    exit 1
fi

parameterFile="@./azure/az_staticwebapp.parameters.json"
az group create -n $RG -l $LOCATION --verbose -o yamlc
az deployment group create --name rot-app-release$RANDOM \
    --resource-group $RG \
    --template-file ./azure/az_staticwebapp_deploy.json \
    --parameters $parameterFile \
    --parameters repositoryToken=$GITHUB_PAT \
    --verbose 
