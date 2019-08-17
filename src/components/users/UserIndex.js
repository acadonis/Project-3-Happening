import React from 'react'
import { Link } from 'react-router-dom'
import Card from './UserCard'
import axios from 'axios'

class UserIndex extends React.Component {
  constructor() {
    super()

    this.state = { users: [] }
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(res => this.setState({ users: res.data}))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.users.map(user =>
              <div
                key={user._id}
                className="column is-half-tablet is-one-quarter-desktop"
              >
                <Link to={`/users/${user._id}`}>
                  <Card name={user.name} photo={user.photo} city={user.city} categories={user.categories} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default UserIndex
