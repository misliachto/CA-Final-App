const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT

const Guest = require("./models/guests.model.js")

// Middlewares
app.use(express.json())
app.use(cors())

// -- Connecting to database

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB")

    app.listen(PORT, () => console.log(`Server is running on: ${PORT}`))
  })
  .catch((err) => console.log(err))
