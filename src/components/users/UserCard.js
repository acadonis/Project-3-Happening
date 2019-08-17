import React from 'react'

const Card = ({ name, city, categories, photo }) => {
  return (

    <div className="column">
      <div className="card">
        <div className="card header">
          <div className="card-header-title">{name}</div>
        </div>
        <div className="card-image">
          <figure className="image" style={{ backgroundImage: `url(${photo})` }}/>
        </div>
        <div className="card-content">
          <div className="content-subtitle">
            <p>{city}</p>
          </div>
          <div className="content">
            <p>{categories.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
