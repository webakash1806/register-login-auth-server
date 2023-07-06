const express = require("express")
const loginMiddleware = require("../middleware/login.middlware")
const registerMiddleware = require("../middleware/register.middleware")
const { userRegister, userlogin } = require("../controller/user.controller.js")

const userRoute = express.Router()

userRoute.post("/register", registerMiddleware, userRegister)

userRoute.post("/login", loginMiddleware, userlogin)

module.exports = userRoute 