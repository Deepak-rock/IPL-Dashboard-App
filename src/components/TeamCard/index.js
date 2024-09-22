// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamsDetails} = props
  const {id, name, teamImageURL} = teamsDetails
  return (
    <Link to={`/team-matches/${id}`} className="team-link">
      <li className="team-item">
        <img src={teamImageURL} alt={name} className="team-img" />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
