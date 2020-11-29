const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const {} = require("./modules")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const Place = require("./models/place")
const app = express()

app.use("/public", express.static("/public/assets"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))



mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.get("/", cors(), (req, res) => {
    let place = Place.find().limit(10)
    place.then(snap => {
        res.json(snap)
    }).catch(err => res.json(err))
})

module.exports = app
