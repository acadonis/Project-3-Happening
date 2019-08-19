import React from 'react'
import { Link } from 'react-router-dom'
import HappeningCard from './happeningsearch/HappeningSearchCard'
import axios from 'axios'

class HappeningIndex extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    axios.get('/api/happenings')
      .then(res => this.setState({ happenings: res.data }))
  }

  render() {
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {!this.state.happenings && <h2 className="title is-2">Loading...</h2>}
            {this.state.happenings && this.state.happenings.map(happening =>
              <div className="column is-full" key={happening._id}>
                <Link to={`/happenings/${happening._id}`}>
                  <HappeningCard
                    name={happening.name}
                    localDate={happening.local_date}
                    localTime={happening.local_time}
                    photo={happening.photo}
                    venue={happening.venue}
                    description={happening.description}
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

export default HappeningIndex
