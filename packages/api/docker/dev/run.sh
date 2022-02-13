#!/bin/bash

echo This is a development script, please feel free to use it!

sleep 1

echo Would you like to use a custom environment? [y/n]
read ANSWER

if [ "$ANSWER" = "y" ]; then
    echo This feature is not ready yet, sorry!
    sleep 1
fi

docker-compose up --build --force-recreate --remove-orphans