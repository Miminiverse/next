FROM node:18-alpine

# Add build argument for forcing updates
ARG BUILD_VERSION
ENV BUILD_VERSION=$BUILD_VERSION

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]