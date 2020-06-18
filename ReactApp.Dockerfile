FROM node:10 AS development

ENV CI=true
ENV PORT=3000

WORKDIR /course
COPY package.json /course/package.json
COPY package-lock.json /course/package-lock.json
RUN npm ci
COPY . /course

CMD ["npm", "start"]

FROM development AS builder
RUN npm i 

RUN npm run build:prod

EXPOSE 3000
#RUN npm run build:local

FROM nginx:1.13-alpine

COPY --from=builder ./course/dist/ /usr/share/nginx/html