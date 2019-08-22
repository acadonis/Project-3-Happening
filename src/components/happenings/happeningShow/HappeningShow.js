import React from 'react'
import axios from 'axios'
import Auth from '../../../lib/Auth'
import { toast } from 'react-toastify'

import Hero from './Hero'
import MainBox from './MainBox'
import CommentsBox from './CommentsBox'
import DetailsBox from './DetailsBox'
import AttendeesBox from './AttendeesBox'
import OtherHappeningsBox from './OtherHappeningsBox'

class HappeningShow extends React.Component {
  constructor() {
    super()
    this.state = {
      happening: null,
      commentsAreExpanded: false,
      commentFormIsOpen: false,
      commentFromData: {},
      errors: {}
    }

    this.attendHappening = this.attendHappening.bind(this)
    this.toastNonUser = this.toastNonUser.bind(this)
    this.unAttendHappening = this.unAttendHappening.bind(this)
    this.toggleComments = this.toggleComments.bind(this)
    this.toggleCommentForm = this.toggleCommentForm.bind(this)
    this.storeCommentFormData = this.storeCommentFormData.bind(this)
    this.submitComment = this.submitComment.bind(this)
    this.deleteHappening = this.deleteHappening.bind(this)
    this.loadHappening = this.loadHappening.bind(this)
    this.linkToHappening = this.linkToHappening.bind(this)
  }

  toastNonUser() {
    if (!Auth.isAuthenticated()) {
      toast.error('You must be logged in!')
      return true
    }
  }

  attendHappening() {
    if (this.toastNonUser()) return
    axios.put(`/api/happenings/${this.props.match.params.id}/attend`, {}, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ happening: res.data }))
  }

  unAttendHappening() {
    axios.put(`/api/happenings/${this.props.match.params.id}/unattend`, {}, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ happening: res.data }))
  }

  toggleComments() {
    console.log(this.state.commentsAreExpanded)
    let commentsAreExpanded = null
    if (this.state.commentsAreExpanded === true) commentsAreExpanded = false
    else commentsAreExpanded = true
    this.setState({ commentsAreExpanded })
  }

  toggleCommentForm() {
    if (this.toastNonUser()) return
    let commentFormIsOpen = null
    if (this.state.commentFormIsOpen === true) {
      commentFormIsOpen = false
    } else {
      commentFormIsOpen = true
      const commentFormData = { content: ''}
      this.setState({ commentFormData })
    }
    this.setState({ commentFormIsOpen })
  }

  storeCommentFormData(e) {
    if (this.state.errors['comments.0.content']) this.setState({ errors: {} })
    const commentFormData = { ...this.state.commentFormData, [e.target.name]: e.target.value }
    this.setState({ commentFormData })
  }

  submitComment(e) {
    e.preventDefault()
    axios.post(`api/happenings/${this.props.match.params.id}/comments`, this.state.commentFormData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(res => this.setState({ happening: res.data, commentFormIsOpen: false }))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  deleteHappening() {
    axios.delete(`/api/happenings/${this.props.match.params.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/happenings'))
  }

  loadHappening(happeningId) {
    return axios.get(`/api/happenings/${happeningId}`)
      .then(res => {
        this.setState({ happening: res.data })
      })
      // Does the below need to be chained? Would it be better to have them both requested at the same time
      .then(() => {
        axios.get('/api/happenings/limit/4')
          .then(res => this.setState({ similarHappenings: res.data }))
      })
  }

  linkToHappening(happeningId) {
    this.props.history.push(`/happenings/${happeningId}`)
  }

  componentDidMount() {
    this.loadHappening(this.props.match.params.id)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ happening: null })
      this.loadHappening(this.props.match.params.id)
    }
  }
  // FM - note to self: May want to give a more developed loading page
  render() {
    console.log(this.state)
    const happening = this.state.happening
    const similarHappenings = this.state.similarHappenings
    if (!happening) return <h1 className="title">Loading ... </h1>
    return(
      <div className="section">
        <Hero
          deleteHappening={this.deleteHappening}
          attendHappening={this.attendHappening}
          unAttendHappening={this.unAttendHappening}
          {...{happening}}
        />
        <div className="container">

          <div className="columns is-variable is-4">

            <div className="column is-three-fifths">
              <MainBox {...happening} />
              <CommentsBox
                comments={happening.comments}
                commentsAreExpanded={this.state.commentsAreExpanded}
                commentFormIsOpen={this.state.commentFormIsOpen}
                errors={this.state.errors}
                toggleComments={this.toggleComments}
                toggleCommentForm={this.toggleCommentForm}
                storeCommentFormData={this.storeCommentFormData}
                submitComment={this.submitComment}
              />
            </div>

            <div className="column is-two-fifths container">
              <DetailsBox
                localTime={happening.local_time}
                localDate={happening.local_date}
                {...happening}
              />
              <AttendeesBox attendees={happening.attendees} />
              {similarHappenings && <OtherHappeningsBox
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

export default HappeningShow
