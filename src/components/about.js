import React, { useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import scrollTo from "gatsby-plugin-smoothscroll"

function getElapsedAge() {
  let birth = Date.parse("1/22/1998")
  let age = Date.now() - birth
  return (age / (365 * 86400 * 1000)).toFixed(10)
}

const About = () => {
  const [age, setAge] = useState(23.0)
  useEffect(() => {
    const timer = setTimeout(() => {
      setAge(getElapsedAge())
    }, 100)
    return () => clearTimeout(timer)
  })

  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>I am <span className="age-span">{age}</span>{" "}
              years old.
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
            <p>
              For more information, check out my{" "}
              <button onClick={() => scrollTo("#resume")}>
                Resume <img className="smallLogo" src={data.resumeLogo} />
              </button>
            </p>
          </div>
          <div className="image-wrapper">
            <img className="avatar" src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
