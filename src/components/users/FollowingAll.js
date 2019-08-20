import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class followingAll extends React.Component {

  constructor() {
    super()

    this.state = {}
  }

  getFollowings() {
    return (
      <div className="columns is-multiline">
        {!this.state.user.following[0] && <h2 className="subtitle is-4">Not following</h2>}
        {this.state.user.following[0] && this.state.user.following.map(follow =>
          <Link className="column is-offset-0 is-one-fifth has-text-centered"
            key={follow._id}
            to={`/users/${follow._id}`}
          >
            <div>
              <figure className="image is-128x128  has-image-centered">
                <img className="is-rounded" src={follow.photo} />
              </figure>
              <p className="is-6 has-text-weight-semibold">{follow.name}</p>
            </div>
          </Link>
        )}

      </div>
    )
  }

  getUser() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
  }

  componentDidMount() {
    this.getUser()
  }

  render() {
    if(!this.state.user) return null
    console.log(this.state.user.following)
    return (
      <section className="section">
        <div className="container">
          {this.getFollowings()}
        </div>
      </section>
    )
  }

}


export default followingAll
