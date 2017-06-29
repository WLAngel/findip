FROM node:latest
RUN mkdir -p /src
WORKDIR /src
COPY . /src
RUN npm install
EXPOSE 8888
CMD ["npm", "start"]
