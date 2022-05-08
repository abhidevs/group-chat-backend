const express = require("express");

const AuthController = require("../controllers/AuthController");

const router = express.Router();

router.post("/signup", AuthController.signupUser);

router.post("/login", AuthController.loginUser);

module.exports = router;
