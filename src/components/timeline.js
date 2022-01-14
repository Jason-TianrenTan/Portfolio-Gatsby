import React from "react"
import data from "../yourdata"
import Fade from "react-reveal/Fade"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const TimeLine = () => {
  const timelineItems = data.timelines.map(event => {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#fff", color: "#000", boxShadow: "none" }}
        contentArrowStyle={{ borderRight: "10px solid  #fff" }}
        date={<div className="vertical-date">{event.time}</div>}
        iconStyle={{ background: "transparent", boxShadow: "none" }}
        icon={
          <img
            className="aboutIcon"
            src={event.icon ? event.icon : data.codingLogo}
          />
        }
      >
        <h3 className="vertical-timeline-element-title custom-timeline-title">
          {event.title}
        </h3>
        {event.badges.map(badge => {
          return (
            <h4 className="vertical-timeline-element-subtitle experience-badge mr-2 mb-2 badge badge-pill">
              {badge}
            </h4>
          )
        })}

        <p>{event.description}</p>
      </VerticalTimelineElement>
    )
  })

  return (
    <div className="section" id="timeline">
      <div className="container colored">
        <div className="timeline-container">
          <Fade bottom cascade>
            <h1>Timelines</h1>
          </Fade>
          <VerticalTimeline>
            {timelineItems}
            <VerticalTimelineElement
              iconStyle={{ background: "transparent", boxShadow: "none" }}
              icon={<img className="meIcon" src={data.meLogo} />}
              date={<div className="vertical-date">{"Present"}</div>}
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  )
}

export default TimeLine
