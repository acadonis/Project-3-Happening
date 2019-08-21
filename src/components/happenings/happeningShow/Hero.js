import React from 'react'
import { Link } from 'react-router-dom'

import Auth from '../../../lib/Auth'

const Hero = ({ happening, deleteHappening }) => {
  const { name, _id, user } = happening
  return (
    <div>
      <div className="hero is-light">
        <div className="hero-body">
          <div className="level">
            <h1 className="title column is-9">
              {name}
            </h1>
            <div className="level-right">
              <div className="level-item">
                {Auth.isCurrentUser(user) && <button
                  className="button has-text-weight-semibold is-danger"
                  onClick={deleteHappening}
                >Delete</button>}
              </div>
              <div className="level-item">
                {Auth.isCurrentUser(user) && <Link
                  to={`/happenings/${_id}/edit`}
                >
                  <button className="button has-text-weight-semibold is-primary">Edit</button>
                </Link>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Hero
