import React from "react"
import Button from "../components/Button"
import { Link } from "react-router-dom"
import "./MainPage.css"

const MainPage = () => {
  return (
    <div className="main-page__container">
      <div className="main-page-header__container">
        <h3>Welcome to Event Management APP</h3>
        <p>To manage your guests list, please go to the Guests Page</p>
      </div>
      <div>
        <Link to="/api/guests">
          <Button text="Guests Page" />
        </Link>
      </div>
    </div>
  )
}

export default MainPage
