FROM node:18-alpine

WORKDIR /frontend

COPY package.json .

RUN yarn

COPY . .

CMD ["yarn", "dev"]