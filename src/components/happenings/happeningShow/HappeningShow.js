import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

  }

  componentDidMount() {
    axios.get(`/api/happenings/${this.props.match.params.id}`)
      .then(res => this.setState({ happening: res.data }))
      .then(() => {
        axios.get('/api/happenings/limit/4')
          .then(res => this.setState({ similarHappenings: res.data }))
      })

  }

  noteFunctionDeleteMe(){
    <div className="columns">
      <div className="column">
        <div className="buttons">
          <Link
            className="button"
            to={`/happenings/${this.props.match.params.id}/edit`}
          >Edit</Link>

          <button onClick={this.handleDelete} className="button is-danger">Delete</button>
        </div>
      </div>
    </div>
  }

  handleDelete() {
    axios.delete(`/api/happenings/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/happenings'))
  }
  // FM - note to self: May want to give a more developed loading page as opposed to null
  render() {
    const happening = this.state.happening
    const similarHappenings = this.state.similarHappenings

    if (!happening) return <h1>Loading ... </h1>
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
              />}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HappeningShow
