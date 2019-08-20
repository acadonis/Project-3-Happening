import React from 'react'
import CategoryCard from '../common/CategoryCard'

const HappeningIndexLargeCard = ({ name, categories, localDate, time, photo, attendance_count, description }) => {


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
        <p className="content">{time}</p>
        <p className="content">{localDate}</p>
        <p className="content">{attendance_count}</p>
        <p className="content">{description}</p>

      </div>
    </div>

  )
}

export default HappeningIndexLargeCard
