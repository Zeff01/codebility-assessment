import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (user, res) => {
    // Generate a JWT token

    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: "1h"
    })

    res.cookie("token", token, {
        httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        sameSite: "Strict", // Helps prevent CSRF attacks
        maxAge: 3600000 // 1 hour in milliseconds
    })
}