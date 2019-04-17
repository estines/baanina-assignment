# Baania assignment

this project build for test my programming skill.

## How to run this project

### With Docker

you can run this project using docker following this command

1.  `docker-compose up -d --build`
2.  `docker build -t [image-name] . && docker run -it -p 3000:3000 -d --name [container-name] [image-name]`

if this project was built as docker container you can run `docker start [container-name]` directly

### Without Docker

you can run this project following command

- `yarn dev` use to run development version of this project

- `yarn build` use to build to static (.next folder was created afterward)

- `yarn start` use to run nextjs on production environment

> `Important!` yarn start require .next folder before running
