FROM node:18.16.0-alpine AS BUILD_IMAGE

RUN apk add --no-cache git bash curl

# RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin
# RUN curl -sf https://gobinaries.com/tj/node-prune | /bin/sh && \node-prune

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

# install dependencies
RUN yarn install --frozen-lockfile

COPY . .

# build application
RUN yarn run build

# remove development dependencies
RUN npm prune --production

# run node prune
# RUN /usr/local/bin/node-prune

FROM nginx:stable-alpine

WORKDIR /usr/src/app

COPY --from=BUILD_IMAGE /usr/src/app/dist/arweave-wallet-kit-landing /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
