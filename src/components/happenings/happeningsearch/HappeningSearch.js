import React from 'react'
import ListView from './ListView'
import Navbar from '../../common/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import HappeningSearchCard from './HappeningSearchCard'
// import mapboxgl from 'mapbox-gl'
// import ReactMapboxGl from "react-mapbox-gl"
// import { Layer, Feature, Source } from "react-mapbox-gl"
//
// const Map = ReactMapboxGl({
//   accessToken: 'pk.eyJ1IjoibXRjb2x2YXJkIiwiYSI6ImNqemI4emZydjA2dHIzYm80ZG96ZmQyN2wifQ.kVp6eB7AkWjslUOtsJyLDQ'
// })

class HappeningSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      happenings: [],
      tabOpen: true
    }
    this.toggleTab = this.toggleTab.bind(this)
  }

  toggleTab() {
    this.setState({ tabOpen: !this.state.tabOpen })
  }

  componentDidMount() {
    axios.get('/api/happenings')
      .then(res => this.setState({ happenings: res.data }))
  }
  // <Navbar />

  render() {
    console.log(this.state)
    return (
      <section className="section">
        <div className="hero is-small is-body is-primary">
          <div className="hero-foot">

          </div>
          <div className="hero-body is-primary">
            <div className="container">
              <h1 className="is-size-1">Find something Happening</h1>
            </div>
          </div>
        </div>
        <div className="level">
          <p className="control has-icons-right">
            <input className="input is-medium" type="text" placeholder="Search"/>
            <span className="icon is-small is-right">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <div className="tabs is-toggle is-boxed is-medium is-right">
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
                <p className="title">One</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
              <div className="tile is-child">
                <hr/>
              </div>
              <div className="tile is-child box">
                <p className="title">Two</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <div className="container">
                <div className="columns is-multiline">
                  {!this.state.happenings && <h2 className="title is-2">Loading...</h2>}
                  {this.state.happenings && this.state.happenings.map(happening =>
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
        </div>
      </section>
    )
  }
}

export default HappeningSearch

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
