import React, { useState, useEffect } from "react"
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

  const updateGuest = (e) => {
    const guestId = e.target.className
    const trElements = document.querySelectorAll("tr")

    const guestUpdate = Array.from(trElements).filter(
      (guest) => guest.id === guestId
    )[0]

    axios.put(`http://localhost:8000/api/guests/${guestId}`, {
      name: guestUpdate.children[0].innerText,
      surname: guestUpdate.children[1].innerText,
      email: guestUpdate.children[2].innerText,
      age: guestUpdate.children[3].innerText,
    })
  }

  return (
    <table className="guest-list__container">
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Year of birth</th>
          <th>Delete/Edit</th>
        </tr>
      </thead>
      <tbody>
        {guestList.map((guest) => {
          return (
            <tr id={guest._id} key={guest._id}>
              <td contentEditable={true} suppressContentEditableWarning={true}>
                {guest.name}
              </td>
              <td contentEditable={true} suppressContentEditableWarning={true}>
                {guest.surname}
              </td>
              <td contentEditable={true} suppressContentEditableWarning={true}>
                {guest.email}
              </td>
              <td contentEditable={true} suppressContentEditableWarning={true}>
                {guest.age}
              </td>
              <td>
                <button className={guest._id} onClick={deleteGuest}>
                  Delete
                </button>
                <button className={guest._id} onClick={updateGuest}>
                  Edit
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
