FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY app.js .
COPY Dockerrun.aws.json .

EXPOSE 5000

CMD node app