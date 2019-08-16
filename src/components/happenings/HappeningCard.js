import React from 'react'

// style={{ backgroundImage: `url(${photo})` }}/>
const HappeningCard = ({ name, localDate, localTime, photo, venue, description }) => {
  return (

    <div className="column">
      <div className="card">
        <div className="card header">
          <div className="card-header-title">{name}</div>
          <div className="card-header-subtitle">{localDate}</div>
          <div className="card-header-subtitle">{localTime}</div>
        </div>
        <article className="media">
          <figure className="media-left">
            <img src={photo} alt={name}/>
          </figure>
        </article>
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

export default HappeningCard
