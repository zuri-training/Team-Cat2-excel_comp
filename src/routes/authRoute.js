const express = require("express");
const router = express.Router();
let User = require('../models/user')
const { check } = require("express-validator");
const auth = require('../middleware/auth');



// // import router controller
const authController = require("../controllers/authController");

// User aunthentication
router.post("/signup", authController.registerNewUser);
router.get("/signup", authController.registerNewUser);
router.post("/login", authController.loginUser);

router.get("/api/auth", auth, authController.getLoggedInUser)




// const authController = require("../controllers/authController");

// router.route('/').get((req, res) => {
//     User.find()
//     .then(users => res.join(users))
//     .catch(err => res. status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//     const email = req.body.email;
//     const newEmail = new User({email});

//     newEmail.save()
//     .then(() => res.join('User added!'))
//     .catch(err => res. status(400).json('Error: ' + err));
// });

// router.get('/signup', authController.signup_get);
// router.post('/signup', authController.signup_post);
// router.get('/login', authController.login_get);
// router.post('/login', authController.login_post);



// router.post("/api/auth/login",
//   [
//     check("email", "Please enter a valid email").isEmail,
//     check("password", "A valid password is required").exists(),
//   ],
//   authController.loginUser
// );


module.exports = router;