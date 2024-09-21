// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamsDetails} = props
  const {id, name, teamImageURL} = teamsDetails
  return (
    <li className="team-item">
      <Link to={`/team-match/${id}`} className="team-link">
        <img src={teamImageURL} alt={name} className="team-img" />
        <p className="name">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
