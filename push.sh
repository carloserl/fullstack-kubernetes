#!/bin/bash


if [[ "$#" -eq 2 ]] && [[ "$1" == "--tag" || "$1" == "-t" ]];
then
  TAG=$2
fi


echo "Tagging docker push carloserl/fullstack-kubernetes_frontend:${TAG}"
docker push carloserl/fullstack-kubernetes_frontend:${TAG}
          
echo "Tagging docker push carloserl/fullstack-kubernetes_backend${TAG}"
docker push carloserl/fullstack-kubernetes_backend:${TAG}
