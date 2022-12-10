const express = require("express");
const cookieParser = require("cookie-parser");
const router = express.Router();
const { check } = require("express-validator");
const auth = require('../middleware');

// setting up - newsletter
const email = require("../email/mail");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(cookieParser());


//  import router controller
const usersController = require("../controllers/usersController");
const bodyParser = require("body-parser");

// User aunthentication
router.post("/api/auth/login",
  [
    check("email", "Please enter a valid email").isEmail,
    check("password", "A valid password is required").exists(),
  ],
  usersController.loginUser
);

router.get("/api/auth", auth, usersController.getLoggedInUser)


// newsletter
router.post("/api/sendMail", (req, res) => {
  sendEmail(req.body.email, "hello");
})


module.exports = router;
