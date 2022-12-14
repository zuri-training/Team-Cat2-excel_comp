const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require('../middleware/auth');

const authController = require("../controllers/authController");

router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);


module.exports = router;


// // import router controller
// const authController = require("../controllers/authController");

// // User aunthentication
// router.post("/signup", authController.registerNewUser);

// router.post("/api/auth/login",
//   [
//     check("email", "Please enter a valid email").isEmail,
//     check("password", "A valid password is required").exists(),
//   ],
//   authController.loginUser
// );

// router.get("/api/auth", auth, authController.getLoggedInUser)