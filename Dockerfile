FROM node:19

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY *.js /app/

ENTRYPOINT [ "node", "index.js" ]