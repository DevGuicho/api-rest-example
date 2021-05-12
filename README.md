# SIMPLE API REST SERVICE ARCHITECTURE EXAMPLE

This example showcases a very simple **CRUD** using service architecture, express, MongoDB, mongoose to handle db requests and [@hapi/boom](https://hapi.dev/module/boom/) to handle errors

## USAGE

### How to use

To initialize the project

    npm install

### Configuration

#### Step 1. Set up your DB on Cloud

- Create an account on [mogodb.com](https://www.mongodb.com/) and then create a new database
- Create a new user with grants for only the new database

#### Step 2. Set up environment variables

Copy the `.env.example` content to `.env` in the root directory.
Then set each variable on `.env` :

- `DB_USER` Is the new user created
- `DB_PASSWORD` Is the new user password
- `DB_NAME` Name of the database created
- `DB_HOST` HOST of the database created example "ip2rv.mongodb.net"

### Run API

To initialize the API on development mode use the comand

    npm run dev

To initialize the API on production mode use the comand

    npm start

## ENDPOINTS

### Read

To get the posts list use

    GET    /api/posts

To get an especific post by id use:

    GET /api/posts/:id

### Create

To create a new post use:

    POST /api/posts

Data resquest example:

    {
    	"title":  "React hooks and custom hooks",
    	"content":  "Lorem ipsum dolot"
    }

### Update

To update a post use:

    PUT /api/posts/:id

### Delete

To delete an specific post use:

    DELETE /api/posts/:id
