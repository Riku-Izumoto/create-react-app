FROM node:15.9.0

WORKDIR /Sort-note

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

COPY . .

ENTRYPOINT [ "yarn", "start" ]
