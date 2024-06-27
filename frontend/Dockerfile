FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx AS runtime
COPY --from=builder /app/dist/frontend /usr/share/nginx/html