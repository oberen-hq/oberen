FROM node:alpine3.11

WORKDIR /usr/app

COPY . .

RUN yarn && yarn db:generate && yarn build

CMD ["yarn", "start:prod"]
