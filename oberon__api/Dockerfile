# FROM node:14-alpine

# WORKDIR /opt/app

# COPY ./package.json ./package.json
# COPY ./yarn.lock yarn.lock
# COPY ./tsconfig.json ./tsconfig.json
# COPY ./setup.js ./setup.js
# COPY ./src ./src
# COPY ./prisma ./prisma
# COPY .env ./

# ARG DUMB_INIT_RELEASE=1.2.5
# RUN apk add bash coreutils \
#     && wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v${DUMB_INIT_RELEASE}/dumb-init_${DUMB_INIT_RELEASE}_$(arch) \
#     && chmod +x /usr/local/bin/dumb-init \
#     && yarn && yarn db:generate

# ENTRYPOINT [ "/app/entrypoint.sh" ]

# CMD ["server"]
