const jwt = require("jsonwebtoken");
require('dotenv').config();
const { SECRET } = process.env;

module.exports = (req, res, next) => {
    const token = req.header("x-auth-token");

    if (!token)
    return res
    .status(401)
    .json({ 
        statusCose: 401, message: 'No token, authourization denied'
    });
    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({
            statusCode: 401,
            message: 'Token is not valid'
        });
    }
}