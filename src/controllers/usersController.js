const User = ('../models/user');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const user = require('../models/user');
require('dotenv').config();
const { SECRET } = process.env;


exports.getLoggedInUser = async (req, res) => {
    try {
        const user = await user.findById(req.user.id).select('-password');
        return res.json({
            statusCode: 200,
            message: 'User gotten successfully',
            user
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error!');
    }
}


// User login
exports.loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
    
    const { email, password } = req.body;

    try {
        let user = await user.findOne ({ email: email });

        if (!user) 
        return res.status(400).json({ 
            status: 400, 
            message: 'Invalid Email/Password' 
        });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) 
        return res.status(400).json({
            statusCode: 400,
            message: 'Invalid Email/Password'
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
                        email: user.email
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