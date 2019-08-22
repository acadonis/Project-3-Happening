import React from 'react'
import CategoryCard from '../../common/CategoryCard'

const HappeningIndexLargeCard = ({ name, categories, localDate, localTime, photo, attendees, description }) => {


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
        <p className="content">Time: {localTime}</p>
        <p className="content">Date: {localDate}</p>
        <p className="content">Users attending: {attendees.length}</p>
        <p className="content">{description}</p>

      </div>
    </div>

  )
}

export default HappeningIndexLargeCard
