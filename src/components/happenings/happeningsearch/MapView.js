import React from 'react'
// import { Link } from 'react-router-dom'
// import mapboxgl from 'mapbox-gl'
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl'
// import { Layer, Feature, Source, GeoJSONLayer } from "react-mapbox-gl"
// import Navbar from '../../common/Navbar'
import axios from 'axios'
// import HappeningSearchCard from './HappeningSearchCard'
// import Features  from './Features'

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibXRjb2x2YXJkIiwiYSI6ImNqemI4emZydjA2dHIzYm80ZG96ZmQyN2wifQ.kVp6eB7AkWjslUOtsJyLDQ'
})

// const geojson = {
//   type: 'FeatureCollection',
//   features: [
//     {
//     type: 'Feature',
//     geometry: {
//       type: 'Point',
//       coordinates: [-77.032, 38.913]
//     },
//     properties: {
//       title: 'Mapbox',
//       description: 'Washington, D.C.'
//     }
//
//   },
//   {
//     type: 'Feature',
//     geometry: {
//       type: 'Point',
//       coordinates: [-122.414, 37.776]
//     },
//     properties: {
//       title: 'Mapbox',
//       description: 'San Francisco, California'
//     }
//   }]
// }

// <GeoJSONLayer
// data={geojson}
// symbolLayout={{
//   "text-field": "{place}",
//   "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
//   "text-offset": [0, 0.6],
//   "text-anchor": "top"
// }}/>
// <Layer type="symbol" id="marker" layout={{ 'icon-image': 'volcano-15' }}>
// <Feature coordinates=
// </Layer>


class MapView extends React.Component {
  constructor() {
    super()
    this.state = {

    }

    this.selectHappening = this.selectHappening.bind(this)
  }

  componentDidMount() {
    axios.get('/api/happenings')
      .then(res => this.setState({ happenings: res.data }))

  }


  selectHappening(happening) {
    this.setState({ selectedHappening: happening })
  }



//   {geojson.features.forEach((marker) => {
//     var el = document.createElement('div');
//     el.className = 'marker'
//     new mapboxgl.Marker(el)
//       .setLngLat(marker.geometry.coordinates)
//       .addTo(map);
//   })}
//
//
// geojson.features.forEach((marker) => {
//   <div className="marker" key={happening._id}>
//
//
//   new mapboxgl.Marker(marker)
//     .setLngLat(marker.geometry.coordinates)
//     .addTo(map)
// })
//
// <div className="marker" key={happening._id}>
//   <Link to={`/happenings/${happening._id}`}>
//     <HappeningSearchCard
//       name={happening.name}
//       localDate={happening.time}
//       localTime={happening.time}
//       photo={happening.photo}
//       venue={happening.venue}
//       description={happening.description}
//     />
//   </Link>
// </div>


  render() {
    console.log(this.state)

    return (
      <section className="section">
        <div id="putMapHere" className="column">
          {!this.state.happenings && <h2 className="title is-2">Loading...</h2>}
          {this.state.happenings &&
            <Map
              style="mapbox://styles/mapbox/streets-v9"
              containerStyle={{
                height: '50vh',
                width: '50vw'
              }}
            >
              {this.state.happenings.map(happening =>
                <div key={happening._id}>
                  <Marker
                    coordinates={[happening.lon, happening.lat]}
                    onClick={() => this.selectHappening(happening)}
                    ariaRole='button'
                  >
                    {'🍖'}
                  </Marker>
                  {this.state.selectedHappening === happening &&
                    <Popup
                      coordinates={[happening.lon, happening.lat]}
                      offset={15}
                    >Hello</Popup>
                  }
                </div>
              )}
            </Map>
          }
        </div>
      </section>
    )
  }
}
export default MapView


// {!this.state.happenings && <h2 className="title is-2">Loading...</h2>}
// {this.state.happenings && this.state.happenings.map(happening =>
//   <Features
//     key={happening._id}
//     longitude={happening.lon}
//     latitude={happening.lat}/>
// )}

// <Map
//   center={[-0.109970527, 51.52916347]}
//   style="mapbox://styles/mapbox/satellite-v9"
//   containerStyle={{
//     height: '100%',
//     width: '100%'
//   }}
// >
// </Map>
