import React from 'react'
import axios from 'axios'
import { categories } from '../../../lib/Categories'
import HappeningIndexSection from './HappeningIndexSection'
import LazyHero from 'react-lazy-hero'

class HappeningIndex extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    axios.get('/api/happenings')
      .then(res => {
        const results = categories.slice(0,5).map(category => {
          return {
            name: category.value,
            happenings: res.data.filter(happening => happening.categories.includes(category.value)).slice(0,5)
          }
        })
        this.setState({ results })
      })
  }



  render() {
    return (

      <section className="section">
        <div className="container">
          {!this.state.results && <h2 className="title is-2">Loading...</h2>}
          {this.state.results && this.state.results.map((result, i) =>
            <div key={i}>
              <HappeningIndexSection
                {...result}
              />
              <LazyHero
                ransitionTimingFunction="ease-in-out" isFixed={true}
                imageSrc="https://unsplash.it/2000/1000" minHeight="10vh">
                <h1>Happening</h1>
              </LazyHero>

            </div>
          )}

        </div>
      </section>
    )
  }
}


export default HappeningIndex
