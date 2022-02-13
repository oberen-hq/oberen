#!/bin/bash

echo WARNING: This is a production script, be careful!
echo Do you wish to continue? [y/n]
read ANSWER

if [ "$ANSWER" = "n" ]; then
    echo "Exiting..."
    exit 1
fi

sleep 1

echo What version will this be? WARNING: This will overwrite the existing version: 
read VERSION

docker build -t alfiephillips/oberen_api:$VERSION .
docker push alfiephillips/oberen_api:$VERSION
docker-compose up -d --build --force-recreate --remove-orphans