FROM node:alpine3.11

WORKDIR /usr/app

COPY . .

RUN yarn && yarn db:generate && yarn build

EXPOSE 4000
EXPOSE 5432

CMD ["yarn", "start:prod"]
