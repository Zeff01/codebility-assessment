# Backend Set Up (5+ Years Experience)

## Overview

The backend features JWT authentication, role-based user management, integration with a weather app using city names, and utilizes a MySQL database with migrations managed through sequelize-cli.

## Requirement

1. Must have a MySQL Database

## Steps to Setup

### 1. Open the terminal and point it to the project directory

1. Type "cd /path/to/the-project/backend"
2. Run command "npm install"

### 2. Copy .env.example and setup database credential

1. Create your MySQL Database any name you want.
2. In terminal that is pointed to the project backend directory, run command "cp .env.example .env"
3. Setup the credentials to DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE

### 3. Running database migrations and seeders

1. Run command "npx sequelize-cli db:migrate"
2. Run command "npx sequelize-cli db:seed:all"

### 4. Running the backend application

1. Run command "npm start" to start the application.
2. The application will run here [http://localhost:4000](http://localhost:4000)
3. To login, open a postman and add this url [http://localhost:4000/api/auth/login](http://localhost:4000/api/auth/login)
   - Admin account
     - email: admin@example.com
     - password: 123456
   - Regular user account
     - email: user@example.com
     - password: 123456
