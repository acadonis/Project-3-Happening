import React from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'

import MainBox from './MainBox'
import CommentsBox from './CommentsBox'
import DetailsBox from './DetailsBox'
import AttendeesBox from './AttendeesBox'
import SimilarHappeningsBox from './SimilarHappeningsBox'

class HappeningShow extends React.Component {
  constructor() {
    super()
    this.state = {}

    this.handleDelete = this.handleDelete.bind(this)
    this.loadHappening = this.loadHappening.bind(this)
    this.linkToHappening = this.linkToHappening.bind(this)

  }

  handleDelete() {
    axios.delete(`/api/happenings/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/happenings'))
  }

  linkToHappening(happeningId) {
    this.props.history.push(`/happenings/${happeningId}`)
    window.scrollTo(0, 0)
  }

  loadHappening(happeningId) {
    axios.get(`/api/happenings/${happeningId}`)
      .then(res => {
        this.setState({ happening: res.data })
      })
      // Does the below need to be chained? Would it be better to have them both requested at the same time
      .then(() => {
        axios.get('/api/happenings/limit/4')
          .then(res => this.setState({ similarHappenings: res.data }))
      })
  }

  componentDidMount() {
    this.loadHappening(this.props.match.params.id)
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ happening: null })
      this.loadHappening(this.props.match.params.id)
    }
  }
  // FM - note to self: May want to give a more developed loading page as opposed to null
  render() {
    const happening = this.state.happening
    const similarHappenings = this.state.similarHappenings

    if (!happening) return <h1 className="title">Loading ... </h1>
    console.log(this.state)
    return(
      <div className="section">
        <div className="hero is-light">
          <div className="hero-body">
            <div className="container columns is-vcentered">
              <h1 className="title column">
                {happening.name}
              </h1>
              <Link
                to={`/happenings/${happening._id}/edit`}
                className="column is-1 is-offset-3"
              >
                <button className="button has-text-weight-semibold is-link">Update</button>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="columns is-variable is-4">
            <div className="column is-three-fifths">
              <MainBox {...happening} />
              <CommentsBox comments={happening.comments} />
            </div>
            <div className="column is-two-fifths container">
              <DetailsBox
                localTime={happening.local_time}
                localDate={happening.local_date}
                {...happening}
              />
              <AttendeesBox attendees={happening.attendees} />
              {similarHappenings && <SimilarHappeningsBox
                happenings={this.state.similarHappenings}
                linkToHappening={this.linkToHappening}
              />}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(HappeningShow)
