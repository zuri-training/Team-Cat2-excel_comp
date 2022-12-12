const User = ('../models/user');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const { SECRET } = process.env;
const expiry = 36000;


exports.registerNewUser = (req, res) => {
    User.findOne ({ email: req.body.email }, (err, existingUser) => {
        if (err) {
            return res.status(500).json({ err })
        }
        if (existingUser) {
            return res.status(400).json({
                status: 400,
                message: 'User with this email already exists'
            })
        }
        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }, (err, newUser) => {
            if (err) {
                return res.status(500).json({ err })
            }
            bcrypt.genSalt(10, (err, salt) => {
                if (err) {
                    return res.status(500).json({ err })
                }
                bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
                    if (err) {
                        return res.status(500).json({ err })
                    }
                    newUser.password = hashedPassword;
                    newUser.save((err, savedUser) => {
                        if (err) {
                            return res.status(500).json({ err })
                        }
                        jwt.sign(
                            {
                            id: newUser._id,
                            firstName: newUser.firstName,
                            lastName: newUser.lastName,
                            email: newUser.email
                        }, SECRET, {expiresIn: expiry}, (err, token) => {
                            if (err) {
                                return res.status(500).json({ err })
                            }
                            return res.status(200).json({
                                message: 'Registration Successful',
                                token
                            })
                        })
                    })
                })
            })
        })
    })
}

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
                expiresIn: expiry,
            },
            (err, token) => {
                if (err) throw err;
                res.json({
                    statusCode: 200,
                    message: 'Logged in Sucessfully',
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