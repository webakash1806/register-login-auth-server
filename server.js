const express = require("express")
const mongoose = require("mongoose")
const portConfig = require("./config/port.config")
const dbConfig = require("./config/db.config")
const bodyParser = require("body-parser")
const userRoute = require('./routes/user.router')

const app = express()
app.use(bodyParser.json())

app.use("/", userRoute)

mongoose.connect(dbConfig.db_URL)
const db = mongoose.connection


db.on("error", () => {
    console.log("Database Error")
})

app.listen(portConfig.PORT, () => {
    console.log(`Server is successfully running at ${portConfig.PORT}`)
})