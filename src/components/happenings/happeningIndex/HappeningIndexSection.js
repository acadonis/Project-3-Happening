import React from 'react'
import { Link } from 'react-router-dom'
import { truncate } from '../../../lib/helpers'

import HappeningIndexLargeCard from './HappeningIndexLargeCard'
import HappeningIndexSmallCard from './HappeningIndexSmallCard'


const HappeningIndexSection = ({ name, happenings }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="box">
          <div className="title is-2">
            <h1 className="title is-2">{name}</h1>
          </div>
          <div className="columns is-multiline">
            {!happenings && <h2 className="title is-2">Loading...</h2>}
            {happenings && happenings.slice(0,2).map(happening =>
              <div
                key={happening._id}
                className="column is-half-desktop is-half-tablet">
                <Link to={`/happenings/${happening._id}`}>
                  <HappeningIndexLargeCard
                    name={truncate(happening.name, 45)}
                    categories={happening.categories}
                    localDate={happening.local_date}
                    localTime={happening.local_time}
                    photo={happening.photo}
                    attendees={happening.attendees}
                    description={truncate(happening.description, 300)}
                  />
                </Link>
              </div>
            )}
          </div>
          <hr/>
          <div className="columns is-multiline">
            {!happenings && <h2 className="title is-2">Loading...</h2>}
            {happenings && happenings.slice(2,5).map(happening =>
              <div
                key={happening._id}
                className="column is-one-third-desktop is-one-third-tablet">
                <Link to={`/happenings/${happening._id}`}>
                  <HappeningIndexSmallCard
                    name={truncate(happening.name, 40)}
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

export default HappeningIndexSection
