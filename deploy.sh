#!/bin/bash
USERNAME=anjali
IP=10.129.132.109
ssh -l ${USERNAME} ${IP} bash << 'EOF'


pwd
cd spoken_tutorial  
virtualenv -p python3 venv
if [ ! -d "venv" ]; then
        virtualenv venv
fi
. venv/bin/activate


rm -rf spoken-website
git clone -b scripts https://github.com/anjalysuresh/spoken-website.git
cd spoken-website




pip3 install -r requirements-dev.txt
pip3 install -r requirements-py3.txt



 

cp sample.config.py spoken/config.py
cd spoken

chown anjali:anjali config.py
cd ..
cd events
cat > display.py
cd   

pwd

cd spoken_tutorial
cd spoken-website

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver 0.0.0.0:8000 

EOF
