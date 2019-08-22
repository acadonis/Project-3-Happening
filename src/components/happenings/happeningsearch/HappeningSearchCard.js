import React from 'react'
import moment from 'moment'


const HappeningSearchCard = ({ name, localDate, localTime, photo, venue, description }) => {

  //THIS USES THE momentjs NODE PACKAGE TO CONVERT UNIX TIME TO OTHER TIME AND DATE FORMATS
  //https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/
  const dayDateMonth = moment(localDate).format('dddd, MMMM Do')
  const amPm = moment(localTime).format('h:mm a')

  return (
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <p className="subtitle">{amPm}</p>
            </div>
            <div className="media-content">
              <p className="subtitle">{dayDateMonth}</p>
              <p className="title is-4">{name}</p>
            </div>
          </div>
        </div>
        <div className="card-image">
          <figure className="image is-16by9">
            <img className="hcPhoto" src={photo} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <p className="subtitle">{venue}</p>
          <p className="subtitle">{description}</p>

        </div>
      </div>
    </div>

  )
}

export default HappeningSearchCard

// style={{ backgroundImage: `url(${photo})`}}


// <div className="column">
//   <div className="card">
//     <div className="card-header">
//       <div className="card-header-title">{name}</div>
//     </div>
//     <div className="card-content">
//       <p className="subtitle">{localDate}</p>
//       <p className="subtitle">{localTime}</p>
//     </div>
//     <div className="card-image">
//       <figure className="image is-16by9">
//         <img className="hcPhoto" src={photo} alt={name} />
//       </figure>
//     </div>
//     <div className="card-content">
//       <div className="content-subtitle">
//         <p>{venue}</p>
//       </div>
//       <div className="content">
//         <p>{description}</p>
//       </div>
//     </div>
//   </div>
// </div>
