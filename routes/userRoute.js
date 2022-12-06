const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

// import router controller
const usersController = require("../controllers/usersController");

// User aunthentication
router.post("/api/auth/login",
  [
    check("email", "Please enter a valid email").isEmail,
    check("password", "A valid password is required").exists(),
  ],
  usersController.loginUser
);

router.get("/api/auth", auth, usersController.getLoggedInUser)

module.exports = router;
