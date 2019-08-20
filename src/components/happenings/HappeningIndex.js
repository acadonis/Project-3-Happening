import React from 'react'

import HappeningIndexMusic from './HappeningIndexTheatre'
import Hero from '../common/Hero'

const HappeningIndex= () => {
  return (
    <section className= "section">
      <div className="container">
        <HappeningIndexMusic/>
      </div>
      <div className="container">
        <Hero/>
      </div>
    </section>
  )
}


export default HappeningIndex
