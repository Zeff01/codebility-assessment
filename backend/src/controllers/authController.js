const db = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * Register a new user
 */
exports.register = (req, res) => {
    const { username, password } = req.body;
    
    // Validation
    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    if (password.length < 6) {
        return res.status(400).json({ error: "Password must be at least 6 characters long" });
    }

    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Insert user into database
    db.run(
        `INSERT INTO users (username, password) VALUES (?, ?)`, 
        [username, hashedPassword], 
        function(err) {
            if (err) {
                if (err.message.includes('UNIQUE constraint failed')) {
                    return res.status(409).json({ error: "Username already exists" });
                }
                console.error('Registration error:', err);
                return res.status(500).json({ error: "Failed to register user" });
            }

            // Generate JWT token
            const token = jwt.sign(
                { id: this.lastID, username }, 
                process.env.JWT_SECRET, 
                { expiresIn: '24h' }
            );

            res.status(201).json({ 
                message: "User registered successfully",
                auth: true, 
                token,
                user: {
                    id: this.lastID,
                    username
                }
            });
        }
    );
};

/**
 * Login an existing user
 */
exports.login = (req, res) => {
    const { username, password } = req.body;

    // Validation
    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    // Find user in database
    db.get(
        `SELECT * FROM users WHERE username = ?`, 
        [username], 
        (err, user) => {
            if (err) {
                console.error('Login error:', err);
                return res.status(500).json({ error: "Server error" });
            }

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            // Verify password
            const passwordIsValid = bcrypt.compareSync(password, user.password);
            if (!passwordIsValid) {
                return res.status(401).json({ 
                    auth: false, 
                    token: null,
                    error: "Invalid password" 
                });
            }

            // Generate JWT token
            const token = jwt.sign(
                { id: user.id, username: user.username }, 
                process.env.JWT_SECRET, 
                { expiresIn: '24h' }
            );

            res.status(200).json({ 
                message: "Login successful",
                auth: true, 
                token,
                user: {
                    id: user.id,
                    username: user.username
                }
            });
        }
    );
};

/**
 * Get current user profile (protected route example)
 */
exports.getProfile = (req, res) => {
    const userId = req.user.id;

    db.get(
        `SELECT id, username, created_at FROM users WHERE id = ?`, 
        [userId], 
        (err, user) => {
            if (err) {
                console.error('Profile fetch error:', err);
                return res.status(500).json({ error: "Server error" });
            }

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            res.status(200).json({ user });
        }
    );
};