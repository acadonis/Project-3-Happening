import React from 'react'

<<<<<<< HEAD
// style={{ backgroundImage: `url(${photo})` }}/>
const HappeningCard = ({ name, localDate, localTime, photo, venue, description }) => {
=======
const Card = ({ name, localDate, localTime, photo, venue, description }) => {
>>>>>>> development
  return (

    <div className="column">
      <div className="card">
        <div className="card header">
          <div className="card-header-title">{name}</div>
          <div className="card-header-subtitle">{localDate}</div>
          <div className="card-header-subtitle">{localTime}</div>
<<<<<<< HEAD
=======
        </div>
        <div className="card-image">
          <figure className="image" style={{ backgroundImage: `url(${photo})` }}/>
>>>>>>> development
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
