// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const dataFormat = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageURL: eachTeam.team_image_url,
    }))
    this.setState({teamsList: dataFormat, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="ipl-bg-container">
        <div className="ipl-home-conatiner">
          <div className="logo-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="teams-list">
              {teamsList.map(team => (
                <TeamCard key={team.id} teamsDetails={team} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
