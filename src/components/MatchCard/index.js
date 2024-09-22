// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchDetails
  const WonOrLost = matchStatus === 'Lost' ? 'lost-status' : 'won-status'
  return (
    <li className="match-item">
      <div className="recent-match-card">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="team-logo-match"
        />
        <p className="team-name-match">{competingTeam}</p>
        <p className="result-match">{result}</p>
        <p className={WonOrLost}>{matchStatus}</p>
      </div>
    </li>
  )
}
export default MatchCard
