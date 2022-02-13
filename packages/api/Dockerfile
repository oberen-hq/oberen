FROM node:14

# Create app directory

WORKDIR /usr/app

COPY package.json ./

RUN yarn

COPY . .
COPY .env .env

RUN yarn build

ENV NODE_ENV=production
ENV DATABASE_HOST=db
ENV REDIS_URL=redis://redis:6379
ENV PORT=80

EXPOSE 80 
CMD ["yarn", "start:prod"]