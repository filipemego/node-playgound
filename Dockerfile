FROM node:8.9.3-alpine

ENV NODE_ENV production

RUN apk update

WORKDIR /home/node/app

COPY src/package*.json ./
RUN npm install && npm cache clean --force
ENV PATH /home/node/app/node_modules/.bin:$PATH

COPY src/ .

EXPOSE 80

CMD ["node", "app.js"]