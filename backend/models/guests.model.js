// -- Guest info needed for Admin form
// -- Name and Surname, E-mail, age
const mongoose = require("mongoose")

const guestSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
})

const Guest = mongoose.model("guest", guestSchema)
module.exports = Guest

// -- Guest info needed for guest list
// -- Name and Surname, E-mail, year of birth
