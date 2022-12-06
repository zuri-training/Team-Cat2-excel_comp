const User = ('../models/user');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const user = require('../models/user');
require('dotenv').config();
const { SECRET } = process.env;


// User login
exports.loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
    
    const { userName, password } = req.body;

    try {
        let user = await user.findOne ({ userName: userName });

        if (!user) 
        return res.status(400).json({ 
            status: 400, 
            message: 'Invalid Username/Password' 
        });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) 
        return res.status(400).json({
            statusCode: 400,
            message: 'Invalid password'
        });

        const payload = {
            user: {
                id: user.id,
            }
        };

        jwt.sign(
            payload,
            SECRET,
            {
                expiresIn: 360000,
            },
            (err, token) => {
                if (err) throw err;
                res.json({
                    statusCode: 200,
                    message: 'Logeed in Sucessfully',
                    user: {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        userName: user.userName
                    },
                    token
                })
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}