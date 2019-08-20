import React from 'react'
import axios from 'axios'

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
    this.getFollowings = this.getFollowings.bind(this)
    this.linkToUser = this.linkToUser.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))

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

  followUser () {
    axios.put(`/api/users/${this.props.match.params.id}/follow`, null, {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
      .then(() => console.log())
  }

  linkToUser(userId) {
    console.log()
    this.props.history.push(`/users/${userId}`)
  }

  getFollowings() {
    return (
      <div className="columns is-multiline">
        {!this.state.user.following[0] && <h2 className="subtitle is-4">Not following</h2>}
        {this.state.user.following[0] && this.state.user.following.map(follow =>
          <Link className="column is-offset-0 is-one-third has-text-centered"
            key={follow._id}
            to={`/users/${follow._id}`}
          >
            <div>
              <figure className="image is-128x128">
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
    console.log()
    const threeHappenings = []
    threeHappenings.push(this.state.user.happenings[0], this.state.user.happenings[1], this.state.user.happenings[2])
    return (
      <div className="columns is-multiline">
        {!this.state.user.happenings[0] && <h2 className="subtitle is-4">No events</h2>}
        {this.state.user.happenings[0] && threeHappenings.map(hap =>
          <div key={hap._id} className={`column is-${hap} is-one-third` }>
            <div className="card">
              <div className="card header">
                <div className="card-header-title">{hap.name}</div>
              </div>
              <div className="card-image">
                <figure className="image" style={{ backgroundImage: `url(${hap.photo})` }}/>
              </div>
            </div>
          </div>
        )}

      </div>
    )
  }

  getPastEvents () {

    const threeHappenings = []
    threeHappenings.push(this.state.user.happenings[3], this.state.user.happenings[4], this.state.user.happenings[5], this.state.user.happenings[6], this.state.user.happenings[7])
    return (
      <div className="columns is-multiline">
        {!this.state.user.happenings[0] && <h2 className="subtitle is-4">No events</h2>}
        {this.state.user.happenings[0] && threeHappenings.map(hap =>
          <div key={hap._id} className={`column is-${hap} is-one-fifth` }>
            <div className="card">
              <div className="card header">
                <div className="card-header-title">{hap.name}</div>
              </div>
              <div className="card-image">
                <figure className="image" style={{ backgroundImage: `url(${hap.photo})` }}/>
              </div>
            </div>
          </div>
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
            <div className="columns">
              <div className="column">
                <figure className="image" style={{ backgroundImage: `url(${this.state.user.photo})` }}/>
              </div>
              <div className="column">
                <h1 className="title is-2">{this.state.user.name}</h1>
                <h2 className="title is-4">{this.state.user.city}</h2>
                <hr />
                <h2 className="subtitle is-4" >About me:</h2>
                {!this.state.user.bio && <p>Tell about yourself</p>}
                {this.state.user.bio && <p>{this.state.user.bio}</p>}
              </div>
            </div>
            {Auth.isCurrentUser(this.state.user) && <div className="buttons">
              <Link
                className="button"
                to={`/users/${this.state.user._id}/edit`}
              >Edit</Link>

              <button onClick={this.handleDelete} className="button is-danger">Delete</button>
            </div>}
            {!Auth.isCurrentUser(this.state.user) && <div className="buttons">
              <button onClick={this.followUser} className="button">Follow</button>
            </div>}
            <hr />
            <div className="container">
              {this.state.user.categories.map(cat =>
                <span key={cat}
                  className={`tag is-${cat.split(' ')[0].toLowerCase()}`}
                >{cat}</span>
              )}
            </div>
            {this.getFollowings()}
            <h1 className="title is-4">Future events</h1>
            <hr />
            {this.getFutureEvents()}
            <h1 className="title is-4">Past events</h1>
            <hr />
            {this.getPastEvents()}

          </div>}

        </div>
      </section>
    )
  }
}

export default Show
