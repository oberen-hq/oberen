FROM node:14
WORKDIR /app
COPY package*.json ./
RUN yarn install --slient
COPY . .
EXPOSE 3000

CMD [ "yarn", "start" ]