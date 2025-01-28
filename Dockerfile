# Étape 1 : Build
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build --prod


# Étape 2 : Serveur Nginx
FROM nginx:alpine
COPY --from=build /app/dist/collaborator-management-frontend /usr/share/nginx/html
EXPOSE 80
