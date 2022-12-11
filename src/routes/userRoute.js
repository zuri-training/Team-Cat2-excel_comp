const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const router = express.Router();
const { check } = require("express-validator");
const passport = require("passport")
const LocalStrategy = require("passport-local");
const User = require('../models/user')
const auth = require('../middleware/auth');

// setting up - newsletter
const email = require("../email/mail");
const { application } = require("express");
const { getRegister } = require("../controllers/usersController");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(cookieParser());

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

const usersController = require("../controllers/usersController");
// register and login routes
// if you want to authenticate any route just include the word "auth" that stands for
// Authentication middleware in any route for example:
// router("/home", auth , getHome)

router.get("/login", (req, res) => {
  res.render("show register page")
});

router.post("/login",(req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    confirmPassword: req.body.confirmPassword
  });
  User.register(newUser, req.body.password, (req, res) => {
    if (err) {
      console.log(err)
      return res.render("show register page")
    }
    passport.authenticate("local")(req, res, function () {
      res.redirect("show home page route")
    })
  })

});


router.get("/login", (req, res) => {
    res.render("login page")
})

router.post("/login", (req, res) => {
  passport.authenticate("local", { successRedirect: "/home route", failureRedirect: "/register" }), (req, res) => {
        
  }
});

router.post("/logout",(req, res) => {
  req.logout();
  res.redirect("")
});





// newsletter
router.get("/api/sendMail", (req, res) => {
  
})
router.post("/api/sendMail", (req, res) => {
  sendEmail(req.body.email, "hello");
})


module.exports = router;
