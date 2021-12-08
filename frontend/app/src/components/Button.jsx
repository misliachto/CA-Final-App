import React from "react"

const Button = (props) => {
  return <button className={props.btnClass}>{props.text}</button>
}

export default Button
