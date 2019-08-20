import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({ name, _id}) => {
  return (
    <div>
      <div className="hero is-light">
        <div className="hero-body">
          <div className="container level is-vcentered">
            <h1 className="title level-left">
              {name}
            </h1>
            <Link
              to={`/happenings/${_id}/edit`}
              className="level-right"
            >
              <button className="button has-text-weight-semibold is-primary">Update</button>
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Hero
