import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class HappeningShow extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.handleDelete = this.handleDelete.bind(this)

  }

  componentDidMount() {
    axios.get(`/api/happenings/${this.props.match.params.id}`)
      .then(res => this.setState({ happening: res.data }))

  }

  handleDelete() {
    axios.delete(`/api/happenings/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/happenings'))
  }

  render() {
    if (!this.state.happening) return null
    return(
      <section className="section">
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
        <div className="container">
          <h1 className="title is-2">{this.state.happening.name}</h1>
          <h2 className="subtitle is-4">{this.state.happening.local_date}</h2>
          <h2 className="subtitle is-4">{this.state.happening.local_time}</h2>
          <figure className="image">
            <img src={this.state.happening.photo} alt={this.state.happening.name} />
          </figure>
        </div>
      </section>
    )
  }
}

export default HappeningShow
