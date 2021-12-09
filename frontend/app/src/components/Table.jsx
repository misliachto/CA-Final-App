import React, { useState, useEffect } from "react"
import Button from "./Button"
import axios from "axios"

const Table = ({ data }) => {
  const [guestList, setGuestList] = useState([])

  const getAllData = () => {
    axios.get("http://localhost:8000/api/guests").then((response) => {
      const allGuests = response.data
      setGuestList(allGuests)
    })
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
                <Button text="Delete" />
                <Button text="Edit" />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
