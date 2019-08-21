import React from 'react'
import axios from 'axios'

import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

import Auth from '../../lib/Auth'
// import Comment from '../common/Comment'

class Show extends React.Component {

  constructor() {
    super()
    this.state = {

      // formData: {rating: 1, content: ""}
    }

    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.getFutureEvents = this.getFutureEvents.bind(this)
    this.getPastEvents = this.getPastEvents.bind(this)
    this.followUser = this.followUser.bind(this)
    this.unfollowUser = this.unfollowUser.bind(this)
    this.getFollowings = this.getFollowings.bind(this)
    this.linkToUser = this.linkToUser.bind(this)
    this.isFollowing = this.isFollowing.bind(this)
    this.isCurrentUser = this.isCurrentUser.bind(this)
  }

  getUser() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
  }

  componentDidMount() {
    this.getUser()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params.id !== this.props.match.params.id) this.getUser()
  }

  handleChange(e) {
    const formData = {...this.state.formData, [e.target.name]: e.target.value}
    this.setState({formData})
  }

  handleDelete () {
    axios.delete(`/api/users/${this.props.match.params.id}`, {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}`}}
    )
      .then(() => this.props.history.push('/'))
  }

  isCurrentUser () {
    const currentUserId = Auth.getCurrentUserId()
    return this.props.match.params.id === currentUserId
  }

  followUser () {

    if(!Auth.isAuthenticated()) return toast.error('You must be logged in!')

    axios.put(`/api/users/${this.props.match.params.id}/follow`, null, {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
      .then((res) => this.setState({ user: res.data }))
  }

  unfollowUser () {
    axios.put(`/api/users/${this.props.match.params.id}/unfollow`, null, {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
      .then((res) => this.setState({ user: res.data }))
  }

  linkToUser(userId) {
    console.log()
    this.props.history.push(`/users/${userId}`)
  }

  isFollowing() {
    const currentUserId = Auth.getCurrentUserId()
    return this.state.user.followers.some(follower => follower._id === currentUserId)
  }

  getFollowings() {
    const showFollowers = this.state.user.following.slice(0, 4)
    return (
      <div className="columns is-multiline is-one-fourth">
        {!this.state.user.following[0] && <h2 className="subtitle is-4">Not following</h2>}
        {this.state.user.following[0] && showFollowers.map(follow =>
          <Link className="column is-offset-0 is-half has-text-centered"
            key={follow._id}
            to={`/users/${follow._id}`}
          >
            <div>
              <figure className="image is-64x64 has-image-centered">
                <img className="is-rounded" src={follow.photo} />
              </figure>
              <p className="is-6 has-text-weight-semibold">{follow.name}</p>
            </div>
          </Link>
        )}

      </div>
    )
  }

  getFutureEvents () {
    console.log(this.state.user.following)
    const threeHappenings = [ ...this.state.user.happenings.slice(0, 3) ]

    return (
      <div className="columns is-multiline">
        {!this.state.user.happenings[0] && <h2 className="subtitle is-6">No events</h2>}
        {this.state.user.happenings[0] && threeHappenings.map(hap =>
          <Link className="column"
            key={hap._id}
            to={`/happenings/${hap._id}`}
          >
            <div key={hap._id} className="column">
              <div className="card">
                <div className="card header">
                  <div className="card-header-title">{hap.name}</div>
                </div>
                <div className="card-image">
                  <figure className="image image-user" style={{ backgroundImage: `url(${hap.photo})` }}/>
                </div>
              </div>
            </div>
          </Link>
        )}

      </div>
    )
  }

  getPastEvents () {

    const threeHappenings = [ ...this.state.user.happenings.slice(3) ]
    return (
      <div className="columns is-multiline">
        {!this.state.user.happenings[0] && <h2 className="subtitle is-6">No events</h2>}
        {this.state.user.happenings[0] && threeHappenings.map(hap =>
          <Link className="column is-one-fifth"
            key={hap._id}
            to={`/happenings/${hap._id}`}
          >
            <div key={hap._id} className="column">
              <div className="card">
                <div className="card header">
                  <div className="card-header-title">{hap.name}</div>
                </div>
                <div className="card-image">
                  <figure className="image has-image-centered image-user" style={{ backgroundImage: `url(${hap.photo})` }}/>
                </div>
              </div>
            </div>
          </Link>
        )}

      </div>
    )
  }

  // getHappeningsById(happenings) {
  //   const listOfHappenings =[]
  //   for(let i = 0; i<happenings.length; i++) {
  //     const happening = happenings[i]
  //     // console.log(this.state.user.happenings)
  //     if(this.state.user.happenings.includes(happening._id)) {
  //       listOfHappenings.push(happening)
  //     }
  //   }
  //   console.log(listOfHappenings)
  //   return listOfHappenings
  // }

  // handleSubmit(e) {
  //   e.preventDefault()
  // axios.post(`/api/users/${this.props.match.params.id}/comments`, this.state.formData, {
  //   headers: {Authorization: `Bearer ${Auth.getToken()}`}
  // })
  //   .then(res => this.setState({user: res.data, formData: {rating: 1, content:""}}))
  // }

  // handleDelete (e) {
  //   console.log(e.target.id)
  //   axios.delete(`http://localhost:4000/users/${this.props.match.params.id}/comments/${e.target.id}`, {
  //     headers: {Authorization: `Bearer ${Auth.getToken()}`}
  //   })
  //     .then(res => this.setState({user: res.data}))
  // }

  render() {
    return (
      <section className="section">
        <div className="container">

          {!this.state.user && <h2 className="title is-2">Loading...</h2>}

          {this.state.user && <div>
            <div className="columns box">
              <div className="column">
                {!this.state.user.photo &&
                  <Link
                    className="button"
                    to={`/users/${this.state.user._id}/edit`}
                  >Add photo
                  </Link>
                }
                {this.state.user.photo && <figure className="image image-user  has-image-centered" style={{ backgroundImage: `url(${this.state.user.photo})` }}/>}
              </div>

              <div className="column">
                <h1 className="title is-2">{this.state.user.name}</h1>
                <h2 className="title is-4">{this.state.user.city}</h2>
                <hr />
                <h2 className="subtitle is-4" >About me:</h2>
                {!this.state.user.bio && <p>Tell about yourself</p>}
                {this.state.user.bio && <p>{this.state.user.bio}</p>}
              </div>

              <div className="column box">
                {this.getFollowings()}
                {this.state.user.following[0] && <Link
                  className="button"
                  to={`/users/${this.state.user._id}/FollowingAll`}
                >Show all<
                /Link>}
              </div>
            </div>

            {Auth.isCurrentUser(this.state.user) && <div className="buttons">
              <Link
                className="button"
                to={`/users/${this.state.user._id}/edit`}
              >Edit<
              /Link>

              <button onClick={this.handleDelete} className="button is-danger">Delete</button>
            </div>}
            { !this.isFollowing() && !this.isCurrentUser() && <div className="buttons">
              <button onClick={this.followUser} className="button">Follow</button>
            </div>}
            {this.isFollowing() &&  !this.isCurrentUser() && <div className="buttons">
              <button onClick={this.unfollowUser} className="button is-danger">Unfollow</button>
            </div>}
            <hr />
            <div className="container">
              {this.state.user.categories.map(cat =>
                <span key={cat}
                  className={`tag is-${cat.split(' ')[0].toLowerCase()}`}
                >{cat}</span>
              )}
              <hr />
            </div>

            <div className="box">
              <h1 className="title is-4">Future events</h1>
              <hr />
              {this.getFutureEvents()}
            </div>
            <div className="box">
              <h1 className="title is-4">Past events</h1>
              <hr />
              {this.getPastEvents()}
            </div>
          </div>}

        </div>
      </section>
    )
  }
}

export default Show
