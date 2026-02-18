
// index.js
require('dotenv').config()
const express = require('express')
const authRoutes = require('./routes/auth.routes')
const publicRoutes = require('./routes/public.routes')

const app = express()
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/', publicRoutes)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
