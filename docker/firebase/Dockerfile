FROM node:14-alpine
ARG WORKDIR
ENV HOME=/${WORKDIR} \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    HOST=0.0.0.0
WORKDIR ${HOME}

RUN yarn global add firebase-tools

CMD ["/bin/sh"]
