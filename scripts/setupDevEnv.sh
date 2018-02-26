echo "Starting mysql..."
sudo mysql-ctl start
echo "Starting NGINX..."
sudo service nginx start
echo "Starting node..."
cd /usr/local/dankplaces/server/
node server.js
