// routes/public.routes.js
const express = require('express')
const axios = require('axios')
const authMiddleware = require('../middleware/auth.middleware')
const router = express.Router()

// Public route
router.get('/public', (req, res) => {
    res.json({ message: 'Public endpoint works!' })
})

// Weather route (can be public or protected)
router.get('/weather/:city', authMiddleware, async (req, res) => {
    const { city } = req.params

    try {
        const response = await axios.get(`https://wttr.in/${city}?format=j1`)
        const current = response.data.current_condition[0]

        res.json({
            city,
            temperature_C: current.temp_C,
            temperature_F: current.temp_F,
            weather_desc: current.weatherDesc[0].value,
            humidity: current.humidity,
            wind_kmph: current.windspeedKmph,
            user: req.user.email // show authenticated user
        })
    } catch (error) {
        res.status(400).json({ error: 'City not found or API error' })
    }
})

// Example protected route
router.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Protected endpoint works!', user: req.user })
})

module.exports = router
