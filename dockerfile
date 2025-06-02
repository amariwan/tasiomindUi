FROM node:23.11.0-alpine3.21 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@latest && npm install -g pnpm

RUN pnpm install
COPY . .

RUN pnpm build

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "run", "dev"]
