import React from 'react'
import CategoryCard from '../common/CategoryCard'


const HappeningIndexSmallCard = ({ name, categories, localDate, photo}) => {
  return (
    <div className="card card-equal-height">
      <div className="card-content">
        <div className="title is-6">{name}</div>
        <div className="card-image">
          <div className="card-image">
            <figure className="image">
              <img src={photo} alt={name} />
            </figure>
          </div>
        </div>
        <br/>
        <p className="content">{localDate}</p>
      </div>

    </div>
  )
}

export default HappeningIndexSmallCard
