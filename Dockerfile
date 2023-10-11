FROM node:17-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
RUN #apt-get update && apt-get install -y nodejs npm
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev
COPY . .
EXPOSE 3000
CMD ["npm", "start"]