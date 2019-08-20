#!/bin/bash

export WORKSPACE='var/lib/jenkins/workspace/venv/bin'


python3 manage.py test --keepdb scriptmanager
