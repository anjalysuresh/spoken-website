#!/bin/bash

export WORKSPACE='var/lib/jenkins/workspace/venv/bin'

pwd

python3 manage.py test --keepdb scriptmanager
