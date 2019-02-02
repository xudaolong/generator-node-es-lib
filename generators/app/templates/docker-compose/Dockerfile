FROM node:10.12.0-alpine

MAINTAINER <%= packageName %>

USER root

ARG ENV

ENV ROOT_APP_DIR=/<%= packageName %>
ENV PORT=80
RUN export NODE_ENV=${ENV}

WORKDIR $ROOT_APP_DIR

ADD ./ $ROOT_APP_DIR/

RUN npm install

EXPOSE $PORT