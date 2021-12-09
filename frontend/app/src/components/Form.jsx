import React, { useState, useEffect } from "react"
import axios from "axios"

const Form = () => {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")

  const [guestList, setGuestList] = useState([])

  useEffect(() => {
    getAllData()
  })

  const getAllData = () => {
    axios.get("http://localhost:8000/api/guests").then((response) => {
      const allGuests = response.data
      setGuestList(allGuests)
    })
  }

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
    getAllData()
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
      <table className="guest-list__container">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
          {guestList.map((guest) => {
            return (
              <tr key={guest._id}>
                <td>{guest.name}</td>
                <td>{guest.surname}</td>
                <td>{guest.email}</td>
                <td>{guest.age}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Form
