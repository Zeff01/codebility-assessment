const db = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
    const { username, password } = req.body;
    
    if(!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, 
        [username, hashedPassword], 
        function(err) {
            if (err) {
                return res.status(500).json({ error: "User already exists." });
            }
            const token = jwt.sign({ id: this.lastID }, process.env.JWT_SECRET, { expiresIn: 86400 });
            res.status(201).json({ auth: true, token: token });
        }
    );
};

exports.login = (req, res) => {
    const { username, password } = req.body;

    db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, user) => {
        if (err) return res.status(500).json({ error: "Server error" });
        if (!user) return res.status(404).json({ error: "User not found" });

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) return res.status(401).json({ auth: false, token: null });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 86400 });
        res.status(200).json({ auth: true, token: token });
    });
};