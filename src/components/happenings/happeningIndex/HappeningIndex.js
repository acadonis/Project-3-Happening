import React from 'react'
import axios from 'axios'
import { categories } from '../../../lib/Categories'
import HappeningIndexSection from './HappeningIndexSection'

class HappeningIndex extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    axios.get('/api/happenings')
      .then(res => {
        const results = categories.map(category => {
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
            <HappeningIndexSection
              key={i}
              {...result}
            />
          )}
        </div>
      </section>
    )
  }
}


export default HappeningIndex

// {i !== comments.length - 1 && <hr />}
//
// truncate(str, limit) {
//   const stringLimit = limit
//   const truncated = _.truncate(str, {length: stringLimit, separator: /,? +/, omission: ''})
//   if(str === undefined) {
//     return ''
//   } else if (stringLimit < str.length) {
//     return `${truncated} ...`
//   } else {
//     return truncated
//   }
// }
