import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container" id="container">
        <div className="header-wrapper">
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>{data.headerTagline[0]}</h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a href={`mailto:${data.contactEmail}`} className="primary-btn">
              CONNECT WITH ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
