#!/bin/sh
PRJ="egg-demo"
docker build -t myregistry.io/demo/egg-demo .
docker push myregistry.io/demo/egg-demo
