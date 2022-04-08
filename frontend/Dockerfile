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

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



# # Pull latest official node image
# FROM node:16-alpine as build

# # Set working directory
# WORKDIR /app

# # Add /app/node_modules/.bin to environment variables
# ENV PATH /app/node_modules/.bin:$PATH

# # Copy package files and install app dependencies
# COPY package*.json /app/

# RUN npm install
# RUN npm install react-scripts -g

# # Add React app to working directory
# COPY ./ /app/
# RUN sed -i s/WHITEPORTAL_FE_RELEASE/$WHITEPORTAL_FE_RELEASE/g .env

# # Start the React app
# RUN npm run build

# # production environment
# FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]