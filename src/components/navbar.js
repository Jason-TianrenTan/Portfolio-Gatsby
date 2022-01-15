import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Social from "./atoms/Social"
import data from "../yourdata"

const Navbar = () => {
  return (
    <div className="section" id="navbar">
      <div className="container">
        <div className="navbar-wrapper">
            <div className="logo-wrapper">
                <img className="navbar-logo" src={data.logos.logo}/>
            </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#skills")}>Skills</button>
            <button onClick={() => scrollTo("#work")}>Projects</button>
            <button onClick={() => scrollTo("#resume")}>Resume</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
