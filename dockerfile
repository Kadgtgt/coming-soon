FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY gasmobil-ad.mp4 /usr/share/nginx/html/gasmobil-ad.mp4


EXPOSE 80