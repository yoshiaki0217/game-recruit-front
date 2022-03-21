FROM node:14.15.0
WORKDIR /usr/src/app/

RUN npm install

RUN npm build