const express = require("express");
const router = express.Router();

const todoList = require("./todo.route");

const registeredRoute = (app) => {
  app.get("/", (req, res) => {
    res.send(
      ` 
      < H E L L O ! />  
      
      • This repository has been modified and is working based on my understanding from reading the documentation.
– Thank you for considering my application. `
    );
  });
  app.use("/todos", todoList);
};

module.exports = registeredRoute;
