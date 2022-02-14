#!/bin/bash

echo WARNING: This is a production script, be careful!
echo Do you wish to continue? [y/n]
read ANSWER

if [ "$ANSWER" = "n" ]; then
    echo "Exiting..."
    exit 1
fi

sleep 1

echo Would you like to edit any environment variables before moving on? [y/n]
read RESPONSE

if ["$RESPONSE" = "y" ]; then
    echo Enter the variables you want to change. ETC -> foo=bar
    read ENVIRONMENT
    
    for var in ENVIRONMENT; do
        export var[0]=var[1]
    done
    
    sleep 1
    echo Environment variables have now be changed...
fi

sleep 3

echo What version will this be? WARNING: This will overwrite the existing version: 
read VERSION

docker build -t alfiephillips/oberen_api:$VERSION .
docker push alfiephillips/oberen_api:$VERSION
docker-compose up -d --build --force-recreate --remove-orphans
