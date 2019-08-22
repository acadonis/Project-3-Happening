import React from 'react'

class Hero extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <section className="hero is-medium is-bold is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="is-size-1">
              Happening
            </h1>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero
