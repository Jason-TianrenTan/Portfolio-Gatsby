import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import Social from "./atoms/Social"
const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container colored">
        <div className="footer-container">
          <h1>Contact Me!</h1>
          <h2>I am currently seeking Summer 2022 internships. Let's create great things together!</h2>
          <Social />
        </div>
      </div>
    </div>
  )
}

export default Footer
