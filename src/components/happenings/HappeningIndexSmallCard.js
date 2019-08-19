import React from 'react'

const HappeningIndexSmallCard = ({ name, category, localDate, photo}) => {
  return (
    <div className="column">
      <div className="card">
        <div className="card header">
          <div className="card-header-title">{name}</div>
          <div className="card-header-subtitle">{category}</div>
          <div className="card-header-subtitle">{localDate}</div>
        </div>
        <div className="card-image">
          <figure className="image" style={{ backgroundImage: `url(${photo})` }}/>
        </div>
      </div>
    </div>
  )
}

export default HappeningIndexSmallCard
