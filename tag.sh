#!/bin/bash
source env.sh

set -e

if [[ "$#" -eq 2 ]] && [[ "$1" == "--tag" || "$1" == "-t" ]];
then
  TAG=$2
fi





echo "Tagging docker tag fullstack-kubernetes_frontend:latest carloserl/fullstack-kubernetes_frontend:${TAG}"
docker tag fullstack-kubernetes_frontend:latest carloserl/fullstack-kubernetes_frontend:${TAG}
          
echo "Tagging docker tag fullstack-kubernetes_backend:latest carloserl/fullstack-kubernetes_backend:${TAG}"
docker tag fullstack-kubernetes_backend:latest carloserl/fullstack-kubernetes_backend:${TAG}

