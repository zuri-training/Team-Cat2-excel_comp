// const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const passport = require("passport")
const LocalStrategy = require("passport-local");
const User = require('../models/user')
require('dotenv').config();
const { SECRET } = process.env;


// Passport Configuration
router.use(require("express-session")({
  secret: "zuri training is doing good",
  resave: false,
  saveUninitialized: false
}));
router.use(passport.initialize());
router.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect("")
}

module.exports = isLoggedIn



// module.exports = (req, res, next) => {
//     const token = req.header("x-auth-token");

//     if (!token)
//     return res
//     .status(401)
//     .json({ 
//         statusCose: 401, message: 'No token, authourization denied'
//     });
//     try {
//         const decoded = jwt.verify(token, SECRET);
//         req.user = decoded.user;
//         next();
//     } catch (err) {
//         res.status(401).json({
//             statusCode: 401,
//             message: 'Token is not valid'
//         });
//     }
// }