FROM nginx:alpine

RUN mkdir usr/share/nginx/html/purple
COPY /dist/ usr/share/nginx/html/purple

EXPOSE 80