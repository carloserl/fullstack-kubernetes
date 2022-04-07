# base image
FROM node:14

WORKDIR /client
COPY package.json .
RUN npm install 
COPY . .
EXPOSE 3000

# start app
CMD ["npm","start"]