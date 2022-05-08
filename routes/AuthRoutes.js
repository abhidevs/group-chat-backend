const express = require("express");

const AuthController = require("../controllers/AuthController");

const router = express.Router();

router.post("/signup", AuthController.signupUser);

module.exports = router;
