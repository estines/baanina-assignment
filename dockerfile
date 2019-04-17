FROM node:10.15.0

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY . /usr/src/app

RUN npm i -g yarn
RUN yarn

EXPOSE 3000

RUN yarn build

CMD ["yarn","start"]
