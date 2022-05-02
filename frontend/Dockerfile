# base image
FROM node:16-alpine as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json /app/

RUN npm install
RUN npm install react-scripts -g
COPY . .
ARG REACT_APP_ENV
ARG REACT_APP_BE
ENV REACT_APP_NAME=$REACT_APP_NAME
ENV REACT_APP_BE=$REACT_APP_BE
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html