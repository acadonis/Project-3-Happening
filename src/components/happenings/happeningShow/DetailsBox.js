import React from 'react'

import HappeningMap from './HappeningMap'

const DetailsBox = ({ venue, city, localDate, localTime, user, lon, lat}) => {
  return (
    <div className="box">
      <p className="has-text-weight-bold">{venue}</p>
      <p className="has-text-weight-medium">{city}</p>
      <hr/>
      <p>Date: {localDate}</p>
      <p>Time: {localTime}</p>
      {<p>Created by: {user.name}</p>}
      <hr />
      <HappeningMap {...{lon, lat}}/>
    </div>
  )
}

export default DetailsBox
