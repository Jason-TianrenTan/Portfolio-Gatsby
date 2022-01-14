import React from "react"
import data from "../yourdata"
import Stats from "./stats"

const Skills = () => {
  return (
    <div className="section" id="skills">
      <div className="container colored">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div className="skills-tile" key={index}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
        <Stats />
      </div>
    </div>
  )
}

export default Skills
