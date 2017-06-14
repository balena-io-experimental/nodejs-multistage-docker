FROM resin/raspberrypi3-node:6
COPY package.json /app/package.json
WORKDIR /app
RUN npm i --production

FROM resin/raspberrypi3-node:6-slim
WORKDIR /app
COPY --from=0 /app/node_modules node_modules
COPY . .
CMD ["node", "index.js"]
