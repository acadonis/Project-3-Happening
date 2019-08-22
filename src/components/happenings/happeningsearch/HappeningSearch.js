import React from 'react'
import ListView from './ListView'
import MapView from './MapView'
import Navbar from '../../common/Navbar'
import axios from 'axios'
import _ from 'lodash'
import Select from 'react-select'
import { categories } from '../../../lib/Categories'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

class HappeningSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      happenings: [],
      tabOpen: true,
      formData: {},
      errors: {},
      startDate: null
    }
    this.toggleTab = this.toggleTab.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.filterHappeningsByCategory = this.filterHappeningsByCategory.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.filterHappeningsByDate = this.filterHappeningsByDate.bind(this)
    this.clearStartDate = this.clearStartDate.bind(this)
  }

  toggleTab() {
    this.setState({ tabOpen: !this.state.tabOpen })
  }

  componentDidMount() {
    axios.get('/api/happenings')
      .then(res => this.setState({ happenings: res.data }))
  }

  handleCategoryChange(selectedCategories) {
    const formData = { ...this.state.formData, allSelectedCategories: selectedCategories.map(option => option.value) }
    this.setState({ formData })
  }

  // const dateSelector = {}
  // handleChange() {
  //   const date =
  //   this.setState({
  //     startDate: date
  //   })
  // }

  handleChange(date){
    this.setState({
      startDate: date
    })
  }

  filterHappeningsByCategory(happenings) {
    const { allSelectedCategories } = this.state.formData
    if(!allSelectedCategories || !allSelectedCategories.length)
      return happenings
    return happenings.filter(happening => {
      return _.intersection(happening.categories, allSelectedCategories).length
    })
  }

  filterHappeningsByDate(happenings) {
    if(!this.state.startDate) return happenings
    const startDate = moment(this.state.startDate).format('YYYY-MM-DD')
    return happenings.filter(happening => {
      return startDate === happening.local_date
    })
  }

  filterHappenings() {
    const filteredByCategory = this.filterHappeningsByCategory(this.state.happenings)
    return this.filterHappeningsByDate(filteredByCategory)
  }

  clearStartDate() {
    this.setState({ startData: null })
  }



  render() {
    const selectedCategories = (this.state.formData.allSelectedCategories || [ ]).map(data => ({ label: data, value: data }))
    return (

      <section className="section">

        <div className="tabs is-medium is-boxed is-right">
          <ul>
            <li className={`${this.state.tabOpen ? 'is-active' : ''}`}>
              <a
                onClick={this.toggleTab} >
                <span>List View </span>
                <span className="icon is-small"><i className="fas fa-list-ul" aria-hidden="true"></i></span>
              </a>
            </li>
            <li className={`${this.state.tabOpen ? '' : 'is-active'}`}>
              <a
                onClick={this.toggleTab}>
                <span>Map View </span>
                <span className="icon is-small"><i className="fas fa-map-marked-alt" aria-hidden="true"></i></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child">
              <div className="tile is-child box">
                <p className="title">Search by Catagory</p>
                <div className="field">
                  <label className="label">Category</label>
                  <Select
                    value= {selectedCategories}
                    options={categories}
                    isMulti
                    onChange={this.handleCategoryChange}
                  />
                  {this.state.errors.category && <small className="help is-danger">{this.state.errors.category}</small>}
                </div>
              </div>
              <div className="tile is-child">
                <hr/>
              </div>
              <div className="tile is-child box">
                <DatePicker
                  inline
                  selected={this.state.startDate}
                  onSelect={this.handleSelect}
                  onClickOutside={this.clearStartDate}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              {this.state.tabOpen ? (
                <ListView sendHappenings={this.filterHappenings()}/>
              ) : (
                <MapView sendHappenings={this.filterHappenings()}/>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HappeningSearch


// <div className="level">
//   <p className="control has-icons-right">
//     <input className="input is-medium" type="text" placeholder="Search"/>
//     <span className="icon is-small is-right">
//       <i className="fas fa-search" aria-hidden="true"></i>
//     </span>
//   </p>
// </div>




// <div className="hero is-small is-body is-primary">
//   <div className="hero-foot">
//     <Navbar />
//   </div>
//   <div className="hero-body is-primary">
//     <div className="container">
//       <h1 className="is-size-1">Find something Happening</h1>
//     </div>
//   </div>
// </div>

// componentDidMount() {
//   axios.get('https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=-0.088817 &topic_category=242&page=20&lat=51.514271&key=41f587c2b7a2b2d7b6d514a1c64106c')
//     .then(res => this.setState({ happenings: res.data }))
// }


// componentDidMount() {
//   axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.API_KEY_WEATHER}/${city.lat},${city.long}`)
//     .then(res => this.setState({cities: this.state.cities.concat(res.data)}))
// }


// <section className="section">
//   <div className="hero is-small is-body is-primary">
//     <div className="hero-foot">
//       <Navbar />
//     </div>
//     <div className="hero-body is-primary">
//       <div className="container">
//         <h1 className="is-size-1">Find something Happening</h1>
//       </div>
//     </div>
//   </div>
//   <div className="level">
//     <p className="control has-icons-right">
//       <input className="input is-medium" type="text" placeholder="Search"/>
//       <span className="icon is-small is-right">
//         <i className="fas fa-search" aria-hidden="true"></i>
//       </span>
//     </p>
//   </div>
//   <div className="tabs is-toggle is-boxed is-medium is-right">
//     <ul>
//       <li className={`${this.state.tabOpen ? 'is-active' : ''}`}>
//       <a onClick={this.toggleTab} data-target="listView">
//           <span>List View </span>
//           <span className="icon is-small" onClick={this.toggleTab}><i className="fas fa-list-ul" aria-hidden="true"></i></span>
//         </a>
//       </li>
//       <li className={`${this.state.tabOpen ? '' : 'is-active'}`}>
//       <a onClick={this.toggleTab} data-target="mapView">
//           <span>Map View </span>
//           <span className="icon is-small"><i className="fas fa-map-marked-alt" aria-hidden="true"></i></span>
//         </a>
//       </li>
//
//     </ul>
//   </div>
//   <div className="tile is-ancestor">
//     <div className="tile is-4 is-vertical is-parent">
//       <div className="tile is-child">
//         <div className="tile is-child box">
//         <Map
//           center={[-0.109970527, 51.52916347]}
//           style="mapbox://styles/mapbox/satellite-v9">
//           <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
//             <Feature coordinates={[-0.109970527, 51.52916347]} />
//           </Layer>
//         </Map>
//         </div>
//         <div className="tile is-child">
//           <hr/>
//         </div>
//         <div className="tile is-child box">
//           <p className="title">Two</p>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
//         </div>
//       </div>
//     </div>
//     <div className="tile is-parent">
//       <div className="tile is-child box">
//         <div className="container">
//           <div className="columns is-multiline">
//             <div id="listView">
//               {!this.state.happenings && <h2 className="title is-2">Loading...</h2>}
//               {this.state.happenings && this.state.happenings.map(happening =>
//                 <div className="column is-full" key={happening._id}>
//                   <Link to={`/happenings/${happening._id}`}>
//                     <HappeningSearchCard
//                       name={happening.name}
//                       localDate={happening.time}
//                       localTime={happening.time}
//                       photo={happening.photo}
//                       venue={happening.venue}
//                       description={happening.description}
//                     />
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="columns is-multiline">
//             <div id="mapView" className="column is-full">
//               <Map
//                 center={[-0.109970527, 51.52916347]}
//                 style="mapbox://styles/mapbox/satellite-v9">
//                 containerStyle={{
//                     height: '100vh',
//                     width: '100vw'
//                   }}
//                 <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
//                   <Feature coordinates={[-0.109970527, 51.52916347]} />
//                 </Layer>
//               </Map>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
