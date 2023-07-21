//Registration
const AuthController = require("../Controllers/AuthController");
const express = require("express");
const router = new express.Router();

//#region Auth
router.post("/signup", AuthController.SignUp);
//#endregion

module.exports = router;
