#!/bin/bash

sudo npm install --prefix /var/www/chat/client
sudo npm run build --prefix /var/www/chat/client
sudo mv /var/www/chat/client/build/* /var/www/chat/
sudo rm -r /var/www/chat/client/

