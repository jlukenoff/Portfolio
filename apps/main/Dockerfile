FROM node:lts-alpine

WORKDIR /usr/src/app

# Copy this separately so we don't have to `npm install` on every code change
COPY package*.json ./
RUN npm install

COPY . ./
RUN npm run build

CMD ["npm", "start"]
