FROM node:14.15.0-alpine

RUN apk update
RUN apk add yarn

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY nodemon.json .
COPY tsconfig.json .

COPY src/ src/
COPY types/ types/
COPY scripts scripts/

RUN scripts/build.sh
COPY .env.test .env.test

CMD scripts/run.sh
