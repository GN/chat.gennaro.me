#!/bin/bash
npm install --prefix /var/www/chat/client
npm run build --prefix /var/www/chat/client
mv /var/www/chat/client/build/* /var/www/chat/
rm -r /var/www/chat/client/
