// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {matchsList: {}, teamName: '', isLoading: true}

  componentDidMount() {
    this.getMatchList()
  }

  getformattedData = detail => ({
    id: detail.id,
    competingTeam: detail.competing_team,
    competingTeamLogo: detail.competing_team_logo,
    date: detail.date,
    firstInnings: detail.first_innings,
    manOfTheMatch: detail.man_of_the_match,
    matchStatus: detail.match_status,
    result: detail.result,
    secondInnings: detail.second_innings,
    umpires: detail.umpires,
    venue: detail.venue,
  })

  getMatchList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updataData = {
      latestMatchDetails: this.getformattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getformattedData(eachMatch),
      ),
      teamBannerUrl: data.team_banner_url,
    }
    this.setState({
      matchsList: updataData,
      teamName: id.toLowerCase(),
      isLoading: false,
    })
  }

  renderRecentMatch = () => {
    const {matchsList} = this.state
    const {recentMatches} = matchsList
    return (
      <ul className="recent-match-list">
        {recentMatches.map(recentMatch => (
          <MatchCard matchDetails={recentMatch} key={recentMatch.id} />
        ))}
      </ul>
    )
  }

  renderLatestMatch = () => {
    const {matchsList} = this.state
    const {teamBannerUrl, latestMatchDetails} = matchsList
    return (
      <div className="team-match-container">
        <img src={teamBannerUrl} alt="team banner" className="banner-img" />
        <div className="latest-matches-container">
          <LatestMatch latestMatch={latestMatchDetails} />
          {this.renderRecentMatch()}
        </div>
      </div>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {teamName, isLoading} = this.state

    return (
      <div className={`team-matches-page ${teamName}`}>
        {isLoading ? this.renderLoader() : this.renderLatestMatch()}
      </div>
    )
  }
}
export default TeamMatches
