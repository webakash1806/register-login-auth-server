const express = require("express")
const { userRegister, userlogin } = require("../controller/user.controller.js")

const userRoute = express.Router()

userRoute.post("/register", userRegister)

userRoute.post("/login", userlogin)

module.exports = userRoute 