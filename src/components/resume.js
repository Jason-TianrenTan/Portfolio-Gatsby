import React from "react"
import data from "../yourdata"
import Fade from "react-reveal/Fade"
import scrollTo from "gatsby-plugin-smoothscroll"

const Resume = () => {
  return (
    <div className="section" id="resume">
      <div className="resume-headers-container">
        <div className="resume-headers">
          <Fade bottom cascade>
            <div className="headers-wrapper">
              <div className="link-container">
                <h1>Resume</h1>
                {data.resume.sections.map(section => (
                  <button onClick={() => scrollTo(section.scroll)}>
                    {section.name}
                  </button>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className="container">
        <div className="resume-container">
          <article style={{ width: "100%" }}>
            <div className="section" id="about">
              <div className="title">
                <h1>Summary</h1>
              </div>
              <hr />
              <ul>
                {data.resume.summary.map((statement, index) => (
                  <li key={index}>
                    <p>{statement}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="section" id="education">
              <div className="title">
                <h1>EDUCATION</h1>
              </div>
              <hr />
              <div className="education-wrapper">
                {data.resume.education.map((education, index) => (
                  <article className="degree-container">
                    <div className="header">
                      <h3 class="degree">{education.title}</h3>
                      <h3 class="time">{education.time}</h3>
                    </div>
                    <h4 class="school">
                      {education.school + ", " + education.location}
                    </h4>

                    <h4 className="relevant-courses">Relevant Courses</h4>
                    <div className="courses-wrapper">
                      {education.courses.map((course, index) => (
                        <h4 className="course">{course}</h4>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="section" id="experience">
              <div className="title">
                <h1>EXPERIENCE</h1>
              </div>
              <hr />
              <div className="experience-wrapper">
                {data.resume.experience.map((experience, index) => (
                  <div className="experience">
                    <div className="header">
                      <h3 class="company">{experience.company}</h3>
                      <h3 class="location">{experience.location}</h3>
                    </div>
                    <div className="titles"></div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Resume
