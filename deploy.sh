#!/bin/bash
export PATH=$PATH:/usr/local/bin
export NODE_PATH=/usr/local/share/node
export USER=root

source $HOME/.nvm/nvm.sh

cd /var/www/api || exit

nvm use --lts

/usr/bin/env npm run start:prod
