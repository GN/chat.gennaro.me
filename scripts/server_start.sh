#!/bin/bash
sudo cd /var/www/chat/server
sudo pm2 start npm --name 'chat' -- start
