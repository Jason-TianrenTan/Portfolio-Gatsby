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
                <div className="resume-title-container">
                  <h1>Resume</h1>
                  <a
                    href={data.resume.url}
                    download
                  >
                    <img className="download-logo" src={data.downloadLogo}/>
                  </a>
                </div>
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
              <div className="summary-wrapper">
                <ul>
                  {data.resume.summary.map((statement, index) => (
                    <li key={index}>
                      <p>{statement}</p>
                    </li>
                  ))}
                </ul>
              </div>
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
                      <h3 className="degree left">{education.title}</h3>
                      <h3 className="right">{education.time}</h3>
                    </div>
                    <h4 className="school left">
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
                      <h3 className="company left">{experience.company}</h3>
                      <h3 className="right">{experience.time}</h3>
                    </div>
                    <div className="titles">
                      <h4 className="left">{experience.title}</h4>
                      <h4 className="right">{experience.location}</h4>
                    </div>
                    <div className="content">
                      <ul>
                        {experience.content.map((statement, index) => (
                          <li key={index}>
                            <p>{statement}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section" id="projects">
              <div className="title">
                <h1>PROJECTS</h1>
              </div>
              <hr />
              <div className="projects-wrapper">
                {data.resume.project.map((project, index) => (
                  <div className="project">
                    <div className="header">
                      <div className="left title-wrapper">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="vr" />
                        <h3 className="project-subtitle">{project.subtitle}</h3>
                      </div>
                      <h3 className="right">{project.time}</h3>
                    </div>
                    <div className="content">
                      <ul>
                        {project.content.map((statement, index) => (
                          <li key={index}>
                            <p>{statement}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section" id="recognitions">
              <div className="title">
                <h1>RECOGNITION & LEADERSHIP</h1>
              </div>
              <hr />
              <div className="recognitions-wrapper">
                {data.resume.recognition.map((recognition, index) => (
                  <div className="recognition">
                    <div className="header">
                      <h3 className="left recognition-title">
                        {recognition.title}
                      </h3>
                      <h3 className="right">{recognition.time}</h3>
                    </div>
                    <div className="titles">
                      <h4 className="left recognition-subtitle">
                        {recognition.subtitle}
                      </h4>
                      <h4 className="right">{recognition.location}</h4>
                    </div>
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
