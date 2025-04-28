import dotenv from "dotenv";

dotenv.config();

import pg from "pg";

export const db = new pg.Pool({

    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: 5432,
    ssl:{

        rejectUnauthorized: false
    }
});