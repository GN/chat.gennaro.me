#!/bin/bash
cd /var/www/chat/server
pm2 start npm --name 'chat' -- start
