#!/bin/sh
PRJ="egg-demo"
docker build -t dockerdev.51zcm.cc/demo/egg-demo .
docker push dockerdev.51zcm.cc/demo/egg-demo
