import bcrypt from "bcrypt";
import { db } from "../db_connection.js";
import { SESSION } from "../server.js";
import crypto from "crypto";
import axios from "axios";

await db.connect();

export class Authentication{

    static registerUser = async (req, res) => {

        try {
            
            const { 
                firstname, 
                lastname, 
                username, 
                password
            } = req.body;

            const hash_password = await bcrypt.hash(password, 15);
            
            const query = `INSERT INTO users (firstname, lastname, username, password) VALUES ($1, $2, $3, $4)`;
            const values = [firstname, lastname, username, hash_password];

            await db.query(query, values);

            res.status(200).json({

                "message": "Successfully registered a user."
            })

        } catch (error) {
            
            console.log(`Error registering user: ${error}`)

            res.status(500).json({

                "message": `${error}`
            })
        }
    }

    static login = async(req, res) => {

        const { username, password } = req.body;
        
        try {

            const query = `SELECT * FROM users WHERE username = $1`;
            const values = [username];

            const response = await db.query(query, values);

           if(response.rows.length > 0){

                if(await bcrypt.compare(password, response.rows[0].password)){

                    const session_id = crypto.randomUUID();

                    SESSION.set(session_id, response.rows[0].user_id);
                    

                    return res.status(200).cookie('session_id', session_id, {

                        secure: true,
                        httpOnly: true,
                        sameSite: "none",
                        maxAge: 30 * 24 * 60 * 60 * 1000
                    }).json({

                        "message": "Welcome! You are logged in."
                    });
                }

                return res.status(401).json({

                    "message": "Password incorrect."
                })
           }
            
           return res.status(401).json({

            "message": "Username not found!"
        });
            
            
        } catch (error) {
            
            console.log(`Error logging in: ${error}`);


            res.status(500).json({

                "message": `Server error: ${error}`
            });
            
        }
    }

    
    static checkIfAuthenticated = async (req, res, next) => {

        try {
            
            const cookie = req.cookies.session_id;

            if(SESSION.has(cookie)){

                return next();

            }

            res.status(401).json({

                "message": "You are not authenticated!"
            });
            
        } catch (error) {
            
            res.status(500).json({

                "message": `Server error: ${error}`
            });
        }
    }

    static logout = (req, res) => {

        const cookie = req.cookies.session_id;

        SESSION.delete(cookie);

        res.status(200).send("Log out");
    }
}

