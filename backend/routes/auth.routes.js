// routes/auth.routes.js
const express = require('express')
const supabase = require('../supabase')
const router = express.Router()

// Register
router.post('/register', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password required' })
    }

    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password
        })

        if (error) return res.status(400).json({ error: error.message })

        res.json({ user: data.user, email })
    } catch (err) {
        res.status(500).json({ error: 'Server error' })
    }
})

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password)
        return res.status(400).json({ error: 'Email and password required' })

    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return res.status(401).json({ error: error.message })

    res.json({
        user: data.user,
        access_token: data.session ? data.session.access_token : null
    })
})

module.exports = router
