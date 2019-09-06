FROM node:10.16.3 as builder

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

FROM node:10.16.3-slim

WORKDIR /usr/app

COPY --from=builder /usr/app/dist /usr/app/dist

COPY package.json package.json

RUN npm install --production

ENV NODE_ENV=production

ADD ./wait /wait

RUN chmod +x /wait

EXPOSE 4000

CMD /wait && npm start