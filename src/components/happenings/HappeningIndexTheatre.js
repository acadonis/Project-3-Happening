import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import _ from 'lodash'
import { categories } from '../../lib/Categories'


import HappeningIndexLargeCard from './HappeningIndexLargeCard'
import HappeningIndexSmallCard from './HappeningIndexSmallCard'


class HappeningIndexMusic extends React.Component {



  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    axios.get(`/api/happenings/limit/5/category/${categories[2].value}`)
      .then(res =>
        this.setState({ happenings: res.data }))
  }
  truncate(str, limit) {
    const stringLimit = limit
    const truncated = _.truncate(str, {length: stringLimit, separator: /,? +/, omission: ''})
    if(str === undefined) {
      return ''
    } else if (stringLimit < str.length) {
      return `${truncated} ...`
    } else {
      return truncated
    }
  }

  render() {
    return (

      <section className="section">
        <div className="container">
          <div className="box">
            <h1 className="title is-2">Music</h1>
            <div className="columns is-multiline">
              {!this.state.happenings && <h2 className="title is-2">Loading...</h2>}
              {this.state.happenings && this.state.happenings.slice(0,2).map(happening =>
                <div
                  key={happening._id}
                  className="column is-half-desktop is-half-tablet">
                  <Link to={`/happenings/${happening._id}`}>
                    <HappeningIndexLargeCard
                      name={this.truncate(happening.name, 45)}
                      categories={happening.categories}
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
            <hr/>
            <div className="columns is-multiline">
              {!this.state.happenings && <h2 className="title is-2">Loading...</h2>}
              {this.state.happenings && this.state.happenings.slice(2,5).map(happening =>
                <div
                  key={happening._id}
                  className="column is-one-third-desktop is-one-third-tablet">
                  <Link to={`/happenings/${happening._id}`}>
                    <HappeningIndexSmallCard
                      name={this.truncate(happening.name, 35)}
                      categories={happening.categories}
                      localDate={happening.local_date}
                      photo={happening.photo}
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HappeningIndexMusic
