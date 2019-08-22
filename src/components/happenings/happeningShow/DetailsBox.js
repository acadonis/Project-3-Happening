import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import HappeningMap from './HappeningMap'

const DetailsBox = ({ venue, city, user, lon, lat, time }) => {
  const dayDateMonth = moment(time).format('dddd, MMMM Do')
  const amPm = moment(time).format('h:mm a')
  return (
    <div className="box">
      <p className="has-text-weight-bold">{venue}</p>
      <p className="has-text-weight-medium">{city}</p>
      <hr/>
      <p>Time: {amPm}</p>
      <p>Date: {dayDateMonth}</p>
      <p>Created by:
        <Link to={`/users/${user._id}`}>
          <span>{` ${user.name}`}</span>
        </Link>
      </p>
      <hr />
      <HappeningMap {...{lon, lat}}/>
    </div>
  )
}

export default DetailsBox
