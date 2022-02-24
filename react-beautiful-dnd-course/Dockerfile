FROM node:16.13.1-alpine AS builder
RUN mkdir -p /build
COPY ./src /build/
WORKDIR /build/
RUN npm install && npm run build

FROM nginx:1.20.2-alpine
COPY --from=builder /build/build/ /usr/share/nginx/html/

