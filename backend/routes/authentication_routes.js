import express from "express";
import { Authentication } from "../controllers/authentication_controller.js";

export const authenticationRoutes = express.Router();


authenticationRoutes.post("/register", Authentication.registerUser);
authenticationRoutes.post("/login", Authentication.login);
authenticationRoutes.post("/logout", Authentication.logout);
