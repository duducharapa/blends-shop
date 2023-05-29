FROM node:20-alpine3.16 AS build
RUN apk --no-cache add yarn
WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY .eslintrc.cjs .eslintrc.cjs
COPY index.html index.html
COPY tsconfig.json tsconfig.json
COPY tsconfig.node.json tsconfig.node.json
COPY vite.config.ts vite.config.ts
COPY public/ public/
COPY src/ src/
RUN touch .env && echo "VITE_API_URL=http://api:8080" >> .env
RUN yarn
RUN yarn build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
