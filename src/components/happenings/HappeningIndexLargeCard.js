import React from 'react'

const HappeningIndexLargeCard = ({ name, category, localDate, time, photo, attendance_count, description }) => {
  return (



    <div className="column">
      <div className="card">
        <div className="card header">
          <div className="card-header-title">{name}</div>
          <div className="card-header-subtitle">{category}</div>
          <div className="card-header-subtitle">{time}</div>
          <div className="card-header-subtitle">{localDate}</div>
        </div>
        <div className="card-image">
          <figure className="image" style={{ backgroundImage: `url(${photo})` }}/>
        </div>
        <div className="card-content">
          <div className="content-subtitle">
            <p>{attendance_count}</p>
          </div>
          <div className="content">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HappeningIndexLargeCard
