// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatch
  return (
    <>
      <h3 className="title">Latest Matches</h3>
      <div className="latest-match-centent">
        <div className="match-details-card">
          <div className="match-details">
            <p className="team-name">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <div className="image-container">
            <img
              src={competingTeamLogo}
              alt={competingTeam}
              className="team-logo"
            />
          </div>
        </div>
        <hr />
        <div className="inning-details">
          <p className="inning-content">First Innings</p>
          <p className="inning-content-value">{firstInnings}</p>
          <p className="inning-content">Second Innings</p>
          <p className="inning-content-value">{secondInnings}</p>
          <p className="inning-content">Man of The Match</p>
          <p className="inning-content-value">{manOfTheMatch}</p>
          <p className="inning-content">Umpires</p>
          <p className="inning-content-value">{umpires}</p>
        </div>
      </div>
    </>
  )
}
export default LatestMatch
