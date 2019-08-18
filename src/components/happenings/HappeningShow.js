import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CatagoryCard from '../common/CategoryCard'

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
  // FM - note to self: May want to give a more developed loading page as opposed to null
  render() {
    if (!this.state.happening) return null
    console.log(this.state)
    return(
      <main>
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
          <hr />
          <div className="container">
            <div className="columns is-variable is-4">
              <div className="column is-three-fifths">
                <section className="box section">
                  <figure className="image is-2by1">
                    <img className="has-ratio" src={this.state.happening.photo} alt={this.state.happening.name} />
                  </figure>
                  <hr />
                  <div className="container">
                    <div className="columns is-multiline is-variable is-4">
                      {' ' && this.state.happening.categories.map(category =>
                        <CatagoryCard
                          key={category}
                          categoryName={category}
                        />
                      )}
                    </div>
                  </div>
                  <hr />
                  <h3 className="subtitle">Description</h3>
                  <p>{this.state.happening.description}</p>
                </section>
              </div>
              <div className="column is-two-fifths container">
                <section className="box section">
                  <p className="has-text-weight-bold">{this.state.happening.venue}</p>
                  <p className="has-text-weight-medium">{this.state.happening.city}</p>
                  <p>Adress line 1</p>
                  <hr/>
                  <p>Date: {this.state.happening.local_date}</p>
                  <p>Time: {this.state.happening.local_time}</p>
                  {this.state.happening.user && <p>Created by: {this.state.happening.user.name}</p>}
                  <hr />
                  <figure>
                    <img src="https://i0.wp.com/365webresources.com/wp-content/uploads/2013/11/A-Small-Google-Maps-jQuery-Plugin-maplacejs.jpg?ssl=1" alt="placeholder map image" />
                  </figure>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default HappeningShow
