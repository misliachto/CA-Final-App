import React, { useState, useEffect } from "react"
import axios from "axios"
import Table from "./Table"

const Form = () => {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")

  const submitGuestHandler = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:8000/api/guests", {
        name: name,
        surname: surname,
        email: email,
        age: age,
      })
      .then(
        (response) => {
          console.log(response.data)
        },
        (error) => {
          console.log(error)
        }
      )
    setName("")
    setSurname("")
    setEmail("")
    setAge("")
  }

  return (
    <div>
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
        <input className="btn-submit" type="submit"></input>
      </form>
      <Table />
    </div>
  )
}

export default Form
