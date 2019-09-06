FROM node:10.16.3-slim as builder

WORKDIR /usr/app

COPY package.json ./

RUN npm i

COPY . .

RUN npm run build

FROM nginx:1.17.3

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/app/build /usr/share/nginx/html