#!/bin/bash
cd /var/www/chat/server
pm2 start --name 'chat' bin/www
