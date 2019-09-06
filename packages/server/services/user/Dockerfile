FROM node:10.16.3-slim as builder

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:10.16.3-slim

WORKDIR /usr/app

COPY --from=builder /usr/app/dist /usr/app/dist

COPY --from=builder /usr/app/package.json /usr/app/package.json

COPY --from=builder /usr/app/wait /usr/app/wait

RUN npm install --production

RUN chmod +x wait

EXPOSE 7000

CMD wait && npm start