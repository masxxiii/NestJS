<h1 align="center">
  <br>
  <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png" alt="NestJS" width="200"></a>
  <br>
  NestJS
  <br>
</h1>

<h4 align="center">NestJS starter kit for backend services</h4>

<p align="center">
  <a href="#main-technologies">Main Technologies</a> •
  <a href="#guide">Guide</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#license">License</a>
</p>

## Main Technologies

This software uses the following main technologies:
<br><br />
<img align="left" alt="JavaScript" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"/>
<img align="left" alt="Typescript" width="30px" src="https://iconape.com/wp-content/png_logo_vector/typescript.png">
<img align="left" alt="Node.js" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"/>
<img align="left" alt="NestJS" width="30px" src="https://docs.nestjs.com/assets/logo-small.svg"/>
<img align="left" alt="Postgres.js" width="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"/>
<img align="left" alt="Prisma" width="30px" src="https://avatars.githubusercontent.com/u/17219288?s=280&v=4"/>
<br />

## Guide

### Getting started

To get started with the project, the developer has to perform the following steps to get
the required containers up and running, the steps are carefully explained below.

<details><summary><b>Show steps</b></summary>

1. First off we have to create a `.env` file in the root of the project. The example is shown below:

   ```shell
   # Node
   NODE_ENV=development
   
   # SERVER
   PORT=3000
   HOST=localhost
   PREFIX=api
   
   # DATABASE
   DB_NAME=backend_service
   DB_PORT=5433
   DB_PORT_INT=5432
   DB_USER=user
   DB_PASSWORD=12345
   
   # PG ADMIN
   PG_PORT=8080
   PG_PORT_INT=80
   PG_EMAIL=user@pgadmin.com
   PG_PASSWORD=12345
   
   # JWT
   JWT_ACCESS=924F55427298A6AF1988F3877BD5E
   JWT_REFRESH=DF446836278F37CAF5B7A71356399
   ```

2. Make sure you set each variable inside the `.env` file.
3. Make sure that docker and docker compose are installed in your system.
4. In the terminal type the following command to spin up the required containers:

    ```sh
    //Spining-up containers using docker compose
    $ docker compose up -d
    ```

5. Make sure the containers are running by typing the following command:
    ```sh
    //Checking out running containers
    $ docker container ls
    ```
</details>

### Installing dependencies

To install the dependencies required in the project, you should first navigate to the project folder and run the
following commands in the terminal:

<details><summary><b>Show steps</b></summary>

1. First make sure that `node_modules` are not installed. 
   In the terminal run:

   ```shell
   $ npm run clean
   ```

2. Second make sure no `build` folder is present.
   In the terminal run:

   ```shell
   $ npm run prebuild
   ```
3. Now install a fresh copy of the dependencies.
   In the terminal run:

   ```shell
   $ npm ci
   ```
   
   or

   ```shell
   $ yarn install --immutable
   ```
</details>

### Starting server

To start the backend server, you can run any of the following commands in the terminal:

<details><summary><b>Show steps</b></summary>

1. To simply start the backend server run:

    ```sh
    $ npm run start
    ```
2. To start the backend server and automatically compile changes run :

    ```sh
    $ npm run start:dev
    ```
3. To start the backend server in debug mode run:

    ```sh
    $ npm run start:debug
    ```
4. To start the backend server in production mode run:

    ```sh
    $ npm run start:prod
    ```
</details>

## License

Copyright © Masood 2023.
