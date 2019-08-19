import React from 'react'
import { Link } from 'react-router-dom'
import HappeningIndexLargeCard from './HappeningIndexLargeCard'
import axios from 'axios'

class HappeningIndexLargeSection extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    axios.get('/api/happenings')

      .then(res =>
        this.setState({ happenings: res.data }))

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
                className="column is-half-desktop is-half-tablet">
                <Link to={`/happenings/${happening._id}`}>
                  <HappeningIndexLargeCard
                    name={happening.name}
                    category={happening.category}
                    localDate={happening.local_date}
                    time={happening.time}
                    photo={happening.photo}
                    attendance_count={happening.attendance_count}
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

export default HappeningIndexLargeSection
