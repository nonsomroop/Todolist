FROM node:20 as builder

WORKDIR /testpj

COPY . .

RUN npm install

RUN npm run build

FROM thistine/simple-http-server

WORKDIR /app

COPY --from=builder /testpj/dist ./static

EXPOSE 4000