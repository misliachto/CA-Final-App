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

// -- Routes
app.get("/", (req, res) => res.send("API is working!"))

// -- GET (all guests)
app.get("/api/guests", (req, res) =>
  Guest.find({}).then((data) => res.json(data))
)

// -- POST (adding new guest to the guests list)
app.post("/api/guests", (req, res) => {
  const guestsData = req.body
  console.log(guestsData)

  const guest = new Guest(guestsData)
  guest.save()
})
// -- DELETE (deleting guest from the guests list)
app.delete("/api/guests/:id", (req, res) => {
  const guestId = req.params.id

  Guest.findByIdAndDelete(guestId).then((result) =>
    console.log("Guest was deleted from the list")
  )
})
