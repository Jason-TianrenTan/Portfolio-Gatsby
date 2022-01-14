import React, { useState } from "react"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

const StatsCard = ({ num, lang }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="stats-card">
      <div className="content">
        <div className="countup-wrapper">
          <CountUp start={num / 3} end={num} duration={2.5}>
            {({ countUpRef, start }) => (
              <VisibilitySensor
                onChange={isVisible => {
                  if (isVisible && !loaded) {
                    start()
                    setLoaded(true)
                  }
                }}
              >
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
        </div>
        <p>
          {lang === "Commits"
            ? "Total Commits"
            : "Lines of " + lang}
        </p>
      </div>
    </div>
  )
}

export default StatsCard
