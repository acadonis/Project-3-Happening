import React from 'react'
import { Link } from 'react-router-dom'
import HappeningIndexSmallCard from './HappeningIndexSmallCard'
import axios from 'axios'

class HappeningIndexSmallSection extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    axios.get('/api/happenings')
      .then(res => this.setState({ happenings: res.data }))
  }

  render() {
    return (


      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {!this.state.happenings && <h2 className="title is-2">Loading...</h2>}
            {this.state.happenings && this.state.happenings.map(happening =>
              <div
                key={happening._id}
                className="column is-one-third-desktop is-one-third-tablet">
                <Link to={`/happenings/${happening._id}`}>
                  <HappeningIndexSmallCard
                    name={happening.name}
                    category={happening.category}
                    localDate={happening.local_date}
                    photo={happening.photo}
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default HappeningIndexSmallSection
