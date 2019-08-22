import React from 'react'
import { Link } from 'react-router-dom'
import HappeningSearchCard from './HappeningSearchCard'
import axios from 'axios'
import HappeningSearch from './HappeningSearch'


// const ListView = (props) => {
//   return
// }



const ListView = ({ sendHappenings }) => {
  return (
    <div className="tile is-parent">
      <div className="tile is-child box">
        <div className="container">
          <div className="columns is-multiline">
            {!sendHappenings && <h2 className="title is-2">Loading...</h2>}
            {sendHappenings && sendHappenings.map(happening =>
              <div className="column is-full" key={happening._id}>
                <Link to={`/happenings/${happening._id}`}>
                  <HappeningSearchCard
                    name={happening.name}
                    localDate={happening.time}
                    localTime={happening.time}
                    photo={happening.photo}
                    venue={happening.venue}
                    description={happening.description}
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ListView
