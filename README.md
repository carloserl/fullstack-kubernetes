# fullstack-kubernetes
fullstack-kubernetes

Aplicación CRUD de react con django para demo en kubernetes


comandos para correr Develpment Mode
 docker-compose up -d --build


comandos para correr Production Mode
 docker-compose -f docker-compose-prod.yml up -d --build



 Cuando creo un build en una ambiente de desarrollo mano variables de ambiente como se trata de codigo js no compilado el se pueden visualizar, pero cuando ya hago un deploy en nginx ya el codigo esta compilado por ende debe tener el valor final para compilar el codigo y en necesario pasar arg