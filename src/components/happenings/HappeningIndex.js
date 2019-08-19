import React from 'react'

import HappeningIndexLargeSection from './HappeningIndexLargeSection'
import HappeningIndexSmallSection from './HappeningIndexSmallSection'


const HappeningIndex = () => {

  return (
    <section className="section">
      <div className="container">
        <HappeningIndexLargeSection/>
        <HappeningIndexSmallSection/>
      </div>
    </section>

  )
}


export default HappeningIndex
