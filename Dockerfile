FROM alexisvincent/nginx:1.9.0
MAINTAINER Alexis Vincent <alexisjohnvincent@gmail.com>
COPY container/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80