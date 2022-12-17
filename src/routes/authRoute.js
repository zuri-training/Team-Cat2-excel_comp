const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require('../middleware/auth');



// // import router controller
const authController = require("../controllers/authController");

// User aunthentication
router.post("/signup", authController.registerNewUser);
router.get("/signup", authController.registerNewUser);
router.post("/login", authController.loginUser);

router.get("/api/auth", auth, authController.getLoggedInUser)



module.exports = router;