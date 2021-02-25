FROM node:lts-alpine3.10

ADD . /opt/webapp
RUN cd /opt/webapp && npm i
RUN cd /opt/webapp && npm run build

WORKDIR /opt/webapp

CMD ["npm", "run", "start:prod"]