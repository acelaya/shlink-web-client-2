FROM node:7
MAINTAINER Alejandro Celaya <alejandro@alejandrocelaya.com>

CMD cd /home/shlink/www && \
    npm install && \
    npm start
