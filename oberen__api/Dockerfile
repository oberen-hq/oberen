# stage 1
FROM node as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm install -g yarn
RUN yarn install
COPY . .
RUN yarn build

# stage 2
FROM node
WORKDIR /usr/app
COPY package*.json ./
RUN yarn install --production

COPY --from=builder /usr/app/dist ./dist

COPY .env .

EXPOSE 8000
CMD yarn start:prod
