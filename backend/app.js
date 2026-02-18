const express = require('express')
const authRoutes = require('./routes/auth.routes')
const publicRoutes = require('./routes/public.routes')

const app = express()
app.use(express.json()) // must be before routes

// Mount routes
app.use('/auth', authRoutes)
app.use('/', publicRoutes) // <- this handles /public and /protected

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
