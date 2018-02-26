echo "Stoping mysql..."
sudo mysql-ctl stop
echo "Stoping node..."
cd /usr/local/dankplaces/server/
killall node
echo "Stoping NGINX..."
sudo service nginx stop
echo "All services stopped!"
