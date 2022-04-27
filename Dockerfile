FROM node:14.17.0-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

FROM trion/nginx-angular:latest
COPY --from=build-step /app/dist/rockpaperscissors /usr/share/nginx/html