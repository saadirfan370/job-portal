const express = require("express");
const router = express.Router();
const {signup, signin, logout, userProfile} = require("../controller/authcontroller");
const { isAuthenticated } = require("../middleware/auth");

router.post('/signup', signup)

router.post('/signin', signin)

router.get('/logout', logout);

router.get('/me',isAuthenticated , userProfile);


module.exports  = router;