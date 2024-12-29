# To Run docker container : cmd
docker run --rm -it -v %cd%:/usr/src/app -v /usr/src/app/node_modules --env-file %cd%/.
env -p 3000:3000 -e NODE_ENV=development auth-service:dev
{use $(pwd) on the place of %cd% if you are using linux or mac}


# Docker container creation step
[text](https://codersgyan.notion.site/Containerisation-Express-app-ecd8f3c5acf446629acdc67cff4ca55f)


# For postgres setup steps
[text](https://codersgyan.notion.site/Setting-up-PostgreSQL-in-a-Docker-Container-with-Persistent-Volume-58711388eb244c9fa1597d87783e3f92)


# cmd for postgres volume and run postgres container
docker run --rm --name mernpg-container -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -v mernpgdata:/var/lib/postgresql/data -p 5432:5432 -d postgres