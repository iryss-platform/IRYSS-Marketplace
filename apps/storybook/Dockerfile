FROM node:20-alpine AS builder
RUN corepack enable && corepack prepare pnpm@9.12.3 --activate
RUN apk add --no-cache python3 make g++
WORKDIR /app
COPY package.json ../../package.json ./root-package.json
COPY . .
RUN npm install
RUN npx storybook build

FROM nginx:alpine
COPY --from=builder /app/storybook-static /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
