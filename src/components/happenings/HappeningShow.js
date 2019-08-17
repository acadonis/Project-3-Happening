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
  // FM - note to self: !!! May want to give a more developed loading page as opposed to null
  render() {
    if (!this.state.happening) return null
    return(
      <section className="section">
        <div className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                {this.state.happening.name}
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="columns is-variable is-8">
            <div className="column is-three-fifths">
              <h1 className="title is-2"></h1>
              <figure className="image">
                <img src={this.state.happening.photo} alt={this.state.happening.name} />
              </figure>
            </div>
            <div className="column is-two-fifths">
              <div className="box">
                <h2 className="title">Happening Details</h2>
                <h2 className="subtitle is-5">Date: {this.state.happening.local_date}</h2>
                <h2 className="subtitle is-5">Time: {this.state.happening.local_time}</h2>
                {this.state.happening.user && <h2 className="subtitle is-5">Created by: {this.state.happening.user.name}</h2>}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HappeningShow
