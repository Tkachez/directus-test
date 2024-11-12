FROM node:lts-alpine3.20 as builder
WORKDIR /opt
COPY . .
RUN yarn install && \
    yarn build

FROM node:lts-alpine3.20
COPY --from=builder --chown=node /opt/.output /opt/.output
USER node
EXPOSE 3000
ENTRYPOINT ["/usr/local/bin/node"]
CMD ["/opt/.output/server/index.mjs"]