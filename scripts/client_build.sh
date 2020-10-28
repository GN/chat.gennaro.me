#!/bin/bash

sudo /var/www/chat/client npm install
sudo /var/www/chat/client npm run build
sudo mv -r /var/www/chat/client/build/* /var/www/chat/
