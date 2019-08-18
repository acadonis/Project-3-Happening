import React from 'react'

const DetailsBox = ({ venue, city, localDate, localTime, user}) => {
  return (
    <section className="box section">
      <p className="has-text-weight-bold">{venue}</p>
      <p className="has-text-weight-medium">{city}</p>
      <p>Adress line 1</p>
      <hr/>
      <p>Date: {localDate}</p>
      <p>Time: {localTime}</p>
      {<p>Created by: {user.name}</p>}
      <hr />
      <figure>
        <img src="https://i0.wp.com/365webresources.com/wp-content/uploads/2013/11/A-Small-Google-Maps-jQuery-Plugin-maplacejs.jpg?ssl=1" alt="placeholder map image" />
      </figure>
    </section>
  )
}

export default DetailsBox
