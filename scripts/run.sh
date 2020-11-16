#!/bin/sh

if [ "$ENVIRONMENT" = "dev" ]; then
    yarn dev
else
    NODE_ENV=production yarn start
fi
