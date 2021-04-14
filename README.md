# Backend
Endpoints soportados con funcionamiento.
./auth/login
./auth/signup

Endpoints soportados sin funcionamiento.
./api

# Notas
Si, la cague con el .gitignore y se subieron todos los node_modules, por desgracia no se puede revertir el primer commit, asi que se quedara asi :v

El proyecto se inicia con npm start (que basicamente es nodemon app.js), se requiere MongoDB para poder testear y un usuario existente.
Para crear dicho primer usuario despues de instalar el server comunitario de mongodb, con postman manda un JSON construido con los datos que se piden para hacer 1 usr, o bien insertalo con el equivalente de mysqlworkbench de mongodb (MongoDB Compass).
