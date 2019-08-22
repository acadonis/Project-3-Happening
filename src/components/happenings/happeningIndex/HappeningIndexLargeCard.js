import React from 'react'
import CategoryCard from '../../common/CategoryCard'
const moment = require('moment')

const HappeningIndexLargeCard = ({ name, categories, localDate, time, photo, attendees, description }) => {

const dayDateMonth = moment(localDate).format('dddd, MMMM Do')
const amPm = moment(time).format('h:mm a')

  return (
    <div className="card card-equal-height">
      <div className="card-content">
        <p className="title is-4">{name}</p>
        <div className="card-image">
          <figure className="image">
            <img src={photo} alt={name} />
          </figure>
        </div>
        <br />
        <div className="columns is-multiline is-4">
          {' ' && categories.map(category =>
            <CategoryCard
              key={category}
              categoryName={category}
            />
          )}
        </div>
        <p className="content">Time: {amPm}</p>
        <p className="content">Date: {dayDateMonth}</p>
        <p className="content">Users attending: {attendees.length}</p>
        <p className="content">{description}</p>

      </div>
    </div>

  )
}

export default HappeningIndexLargeCard
