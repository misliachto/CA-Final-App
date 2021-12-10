import React, { useState, useEffect } from "react"
import Button from "./Button"
import axios from "axios"

const Table = () => {
  const [guestList, setGuestList] = useState([])

  const getAllData = () => {
    axios.get("http://localhost:8000/api/guests").then((response) => {
      const allGuests = response.data
      setGuestList(allGuests)
    })
  }

  const deleteGuest = (e) => {
    const guestId = e.target.className
    axios
      .delete(`http://localhost:8000/api/guests/${guestId}`)
      .then(() => console.log("Guest Deleted"))
  }
  useEffect(() => {
    getAllData()
  })

  return (
    <table className="guest-list__container">
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Age</th>
          <th>Delete/Edit</th>
        </tr>
      </thead>
      <tbody>
        {guestList.map((guest) => {
          return (
            <tr key={guest._id}>
              <td>{guest.name}</td>
              <td>{guest.surname}</td>
              <td>{guest.email}</td>
              <td>{guest.age}</td>
              <td>
                <button className={guest._id} onClick={deleteGuest}>
                  Delete
                </button>
                <button>Edit</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
