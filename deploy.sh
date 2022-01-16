#!/bin/bash

az group create -n $RG -l $LOCATION --verbose -o yamlc
az deployment group create --name rot-app-release$RANDOM \
    --resource-group $RG \
    --template-file ./azure/az_staticwebapp_deploy.json \
    --parameters '@{azure/az_staticwebapp_parameters.json}' \
    --parameters repositoryToken=${GITHUB_PAT} \
    --rollback-on-error \
    --verbose 
