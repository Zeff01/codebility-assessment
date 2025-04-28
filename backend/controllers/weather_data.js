import dotenv from "dotenv";

dotenv.config();

import axios from "axios";

const base_url = `https://api.openweathermap.org/data/2.5`;

export class Weather{

    static getWeatherDataByCityName = async (req, res) => {
    
        try {

            const city = req.query.city;

            const response = await axios.get(`${base_url}/weather`, {

                params:{

                    q: city,
                    appid: process.env.API_KEY_1
                }
            });

            res.status(200).send(response.data)
            
        } catch (error) {
            
            console.log(`Error getting data: ${error}`);
            
            res.status(500).json({

                "message": `Server error: ${error}`
            });
        }
    }

    static getWeatherDataForecast = async (req, res) => {
    
        try {

            const city = req.query.city;

            const response = await axios.get(`${base_url}/forecast`, {

                params:{

                    q: city,
                    appid: process.env.API_KEY_2
                }
            });

            res.status(200).send(response.data)
            
        } catch (error) {
            
            console.log(`Error getting data: ${error}`);
            
            res.status(500).json({

                "message": `Server error: ${error}`
            });
        }
    }
    
}