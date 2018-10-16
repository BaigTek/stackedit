FROM library/fedora:28

LABEL maintainer.name="Wasif Hasan Baig" \
      maintainer.email="pr.wasif@gmail.com"

# Upgrading fedora image
RUN dnf -y upgrade

# Installing git
#     procps - System and process monitoring utilities (includes `ps`)
RUN dnf install -y \
      git \
      procps-ng

VOLUME ["/opt/stackedit"]

WORKDIR /opt/stackedit

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

RUN source ~/.nvm/nvm.sh; \
    nvm install v8.12.0; \
    nvm use v8.12.0;

EXPOSE 8080

CMD source ~/.nvm/nvm.sh; \
    npm i node-gyp; \
    npm i sqlite3@4.0.2; \
    npm install; \
    npm start
#    /bin/bash;
