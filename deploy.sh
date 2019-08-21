#!/bin/bash
USERNAME=anjali
IP=10.129.132.109
ssh -l ${USERNAME} ${IP} "pwd; ls -la"

#ssh root@10.129.132.109
pwd
cd spoken_tutorial  
virtualenv -p python3 venv
if [ ! -d "venv" ]; then
        virtualenv venv
fi
. venv/bin/activate


#sudo rm -rf spoken-website
#git clone https://github.com/anjalysuresh/spoken-website.git



#sudo apt-get install python3-dev libmysqlclient-dev

#pip3 install -r requirements-dev.txt
#pip3 install -r requirements-py3.txt



 

#cp sample.config.py spoken/config.py
#cd spoken

#chown root:root config.py
#cd ..
#cd events

#cat > display.py
#chmod 777 display.py
#pwd
#cd ..
#pwd

#python3 manage.py makemigrations
#python3 manage.py migrate
#python3 manage.py runserver 0.0.0.0:8000 

