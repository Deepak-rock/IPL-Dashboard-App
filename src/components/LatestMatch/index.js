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
              alt={`latest match ${competingTeam}`}
              className="team-logo"
            />
          </div>
        </div>
        <hr />
        <div className="inning-details">
          <h3 className="inning-content">First Innings</h3>
          <p className="inning-content-value">{firstInnings}</p>
          <h3 className="inning-content">Second Innings</h3>
          <p className="inning-content-value">{secondInnings}</p>
          <h3 className="inning-content">Man of The Match</h3>
          <p className="inning-content-value">{manOfTheMatch}</p>
          <h3 className="inning-content">Umpires</h3>
          <p className="inning-content-value">{umpires}</p>
        </div>
      </div>
    </>
  )
}
export default LatestMatch
