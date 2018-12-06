FROM node:10-alpine
LABEL maintainer="Firoj Haque <firoj.haque@indusnet.co.in>"
EXPOSE 8080
RUN mkdir -p /var/codebase/
WORKDIR /var/codebase/
COPY . /var/codebase/
RUN npm install pm2 -g --loglevel=error
RUN npm install --production --loglevel=error
CMD ["pm2-runtime", "process.json"]