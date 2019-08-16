import React from 'react'

const Card = ({ name, local_date, local_time, photo, venue, description }) => {
  return (

    <div className="column">
      <div className="card">
        <div className="card header">
          <div className="card-header-title">{name}</div>
          <div className="card-header-subtitle">{local_date}</div>
          <div className="card-header-subtitle">{local_time}</div>
        </div>
        <div className="card-image">
          <figure className="image" style={{ backgroundImage: `url(${image})` }}/>
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
  )
}

export default Card
