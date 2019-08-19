#!/bin/bash

export WORKSPACE=`pwd`

pip3 uninstall django==1.11
pip3 install django==1.11
rm -rf ~/.local


sudo apt-get install python3-dev libmysqlclient-dev

pwd
pip3 install -r requirements-dev.txt
pip3 install -r requirements-py3.txt



#cd Spoken tutorial script creation 

cp sample.config.py spoken/config.py
cd spoken

chown jenkins:jenkins config.py
cd ..
cd events

cat > display.py
chmod 777 display.py
pwd
cd ..
pwd


python3 manage.py migrate
#python3 manage.py runserver 0.0.0.0:8000



