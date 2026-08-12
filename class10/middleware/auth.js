import jwt from "jsonwebtoken";

function authenticateToken(req, res, next) {
    // 1. Get token from authorization header
    const authHeader = req.headers['authorization'];
    console.log("authHeader >>", authHeader)

    // Header format is usually: "Bearer <token>"
    const token = authHeader && authHeader.split(' ')[1];
    console.log("token >>", token)



    // 2. Return 401 if token is entirely missing
    if (!token) {
        return res.status(401).json({ message: 'Access denied. Token missing.' });
    }

    // 3. Verify token using your environment's secret key
    jwt.verify(token, process.env.JWT, (err, decodedPayload) => {
        if (err) {
            console.log("errr >>", err)
            // Return 403 if token is tampered with or expired
            return res.status(403).json({ message: 'Invalid or expired token.' });
        }

        console.log("decodedPayload >>", decodedPayload)

        // // 4. Attach decoded payload data to the request object
        req.user = decodedPayload;

        // // Move to the next middleware or route handler
        next();
    });
}

export {
    authenticateToken
}
