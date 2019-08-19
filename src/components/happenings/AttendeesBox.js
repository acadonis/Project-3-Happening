import React from 'react'

const AttendeesBox = ({ attendees }) => {
  const attendeesToShow = attendees.length >= 6 ?
    6 : attendees.length >= 3 ?
      3 : attendees.length
  return (
    <div className="box">
      <h3 className="subtitle is-5 has-text-weight-semibold">Attendees</h3>
      <div className="columns is-multiline">
        {attendees.slice(0, attendeesToShow).map(user =>
          <div
            key={user._id}
            className="column is-offset-0 is-one-third has-text-centered"
          >
            <figure className="image is-128x128">
              <img className="is-rounded" src={user.photo} />
            </figure>
            <p className="is-6">{user.name}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AttendeesBox
