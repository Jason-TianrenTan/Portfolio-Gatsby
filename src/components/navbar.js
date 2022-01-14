import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Social from "./atoms/Social"

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <Social />
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#skills")}>Skills</button>
            <button onClick={() => scrollTo("#work")}>Projects</button>
            <button onClick={() => scrollTo("#timeline")}>Timelines</button>
            <button onClick={() => scrollTo("#resume")}>Resume</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
