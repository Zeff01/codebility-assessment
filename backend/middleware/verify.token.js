import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    // Check if the token is present in the cookies
    const token = req.cookies.token;

    if (!token) return res.status(401).json({
        success: false,
        message: "No token provided, authorization denied."
    });

    // Verify the token
    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the decoded user information to the request object
        next(); 
    } catch (error) {
        console.error("Token verification failed:", error);
        return res.status(401).json({
            success: false,
            message: "Token is not valid."
        });
    }
}