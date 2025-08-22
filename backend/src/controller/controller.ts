import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import db from "../config/db";
import { User } from "../types";
import jwt from "jsonwebtoken";
import axios from "axios";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    db.run(
      `INSERT INTO users (username, password) VALUES (?, ?)`,
      [username, hashedPassword],
      function (err) {
        if (err) {
          if (err.message.includes("UNIQUE")) {
            return res.status(400).json({ message: "User already exists" });
          }

          return res
            .status(500)
            .json({ message: "Something went wrong", error: err });
        }

        return res
          .status(201)
          .json({ message: "User registered", userId: this.lastID });
      }
    );
  } catch (error) {
    return next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password required" });
    }

    db.get(
      `SELECT * FROM users WHERE username = ?;`,
      [username],
      async (err: Error | null, user: User) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Something went wrong", error: err });
        }

        if (!user) {
          return res
            .status(401)
            .json({ message: "Invalid username or password" });
        }

        const isPasswordsMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordsMatch) {
          return res
            .status(401)
            .json({ message: "Invalid username or password" });
        }

        const token = jwt.sign(
          { id: user.id, username: user.username },
          process.env.JWT_SECRET!,
          {
            expiresIn: "1h",
          }
        );

        res.cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "strict",
          maxAge: 3600000,
        });

        return res.json({ message: "Login successful" });
      }
    );
  } catch (error) {
    return next(error);
  }
};

export const getWeather = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { location } = req.body;

    if (!location) {
      return res.status(400).json({ message: "Location is required" });
    }

    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&apikey=${process.env.WEATHER_API_KEY}&units=metric`
    );

    return res.json({ weatherData: response.data });
  } catch (error) {
    return next(error);
  }
};
