import React from "react"
import data from "../../yourdata"
const Social = () => {
  return (
    <div className="social-icons">
      {data.social.map((socialLink, index) => (
        <a
          key={index}
          href={socialLink.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={socialLink.img} alt="icons"></img>
        </a>
      ))}
    </div>
  )
}

export default Social
