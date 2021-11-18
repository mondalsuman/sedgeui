import React, { useEffect, useState } from "react"
import RippleContainer from "../components/RippleContainer"
import "../styles/ripple.css"

const Button = ({ children, className, onClick }) => {
  const [intClassName, setIntClassName] = useState("btn ripple")
  const [rippleSpanStyles, setRippleSpanStyles] = useState([])

  useEffect(() => {
    setIntClassName(intClassName + (className ? " " + className : ""))
  }, [])

  useEffect(() => {

  }, [])

  const handleClick = (e) => {
    if (onClick)
      onClick(e)
  }



  return (
    <>
      <button className={intClassName}
        onClick={handleClick}
      >{children}
        <RippleContainer />
      </button>
    </>
  )
}

export default Button