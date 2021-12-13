import React, { useState } from "react"
import axios from "axios"
import Table from "./Table"

const Form = () => {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")

  const [message, setMessage] = useState("")

  const submitGuestHandler = (e) => {
    e.preventDefault()
    setMessage("")
    if (name && surname && email && age) {
      axios
        .post("http://localhost:8000/api/guests", {
          name: name.charAt(0).toUpperCase() + name.slice(1),
          surname: surname.charAt(0).toUpperCase() + surname.slice(1),
          email: email,
          age: 2021 - age,
        })
        .then(
          (response) => {
            console.log(response.data)
          },
          (error) => {
            console.log(error)
          }
        )
    } else {
      setMessage("Please make sure to fill in all the fields")
    }
    setName("")
    setSurname("")
    setEmail("")
    setAge("")
  }

  return (
    <div className="guest-page-main__container">
      <form
        onSubmit={submitGuestHandler}
        className="guest-page-form__container"
      >
        <label>
          Name:
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter guests name"
          ></input>
        </label>
        <label>
          Surname:
          <input
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
            type="text"
            placeholder="Enter guests surname"
          ></input>
        </label>
        <label>
          Email:
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Enter guests Email"
          ></input>
        </label>
        <label>
          Age:
          <input
            onChange={(e) => setAge(e.target.value)}
            value={age}
            type="number"
            placeholder="Enter guests age"
          ></input>
        </label>
        <input className="btn-submit" type="submit" value="Add guest"></input>
      </form>
      <div>
        <h4>{message}</h4>
      </div>
      <Table />
    </div>
  )
}

export default Form
