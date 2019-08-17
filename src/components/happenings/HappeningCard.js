import React from 'react'

const Card = ({ name, localDate, localTime, photo, venue, description }) => {
  return (

    <div className="column">
      <div className="card">
        <div className="card header">
          <div className="card-header-title">{name}</div>
          <div className="card-header-subtitle">{localDate}</div>
          <div className="card-header-subtitle">{localTime}</div>
        </div>
        <div className="card-image">
          <figure className="image" style={{ backgroundImage: `url(${photo})` }}/>
        </div>
        <div className="card-content">
          <div className="content-subtitle">
            <p>{venue}</p>
          </div>
          <div className="content">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
