import React, { useEffect, useState } from "react"
import data from "../yourdata"
import StatsCard from "./atoms/StatsCard"

const Stats = () => {
  return (
    <div className="stats-container">
      {data.stats.map((statsdata, index) => (
        <div className="stats-wrapper">
          <StatsCard key={index} lang={statsdata.name} num={statsdata.count} />
        </div>
      ))}
    </div>
  )
  //   const [codeStats, setCodeStats] = useState(null)
  //   useEffect(() => {
  //     getUserGithubInfo(data.server_urls.repos)
  //   }, [])

  //   const getUserGithubInfo = url => {
  //     fetch(url)
  //       .then(res => res.json())
  //       .then(data => setCodeStats(data))
  //       .catch(error => console.log(error))
  //   }

  //   return (
  //       !codeStats ? <p>Loading...</p> :
  //     <div className="stats-container">
  //       {
  //        {Object.keys(codeStats).map((_key, index) => (
  //         <div className="stats-wrapper">
  //           <StatsCard key={index} lang={_key} num={codeStats[_key]} />
  //         </div>
  //       ))} }
  //     </div>
  //   )
}

export default Stats
