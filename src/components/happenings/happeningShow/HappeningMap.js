import React from 'react'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibXRjb2x2YXJkIiwiYSI6ImNqemI4emZydjA2dHIzYm80ZG96ZmQyN2wifQ.kVp6eB7AkWjslUOtsJyLDQ'
})

const HappeningMap = ({lon, lat}) => {
  console.log('map', lon, lat)
  return (
    <div className="has-ratio">
      {!lon && <h2 className="title is-2">Loading...</h2>}
      {lon &&
          <Map
            center={[lon, lat]}
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: '50vh',
              width: '100%'
            }}
          >
            <div>
              <Marker
                coordinates={[lon, lat]}
                ariaRole='button'
              >
                {<span className="icon is-large"><i className="fas fa-map-marker-alt fa-3x"aria-hidden="true"></i></span>}
              </Marker>
            </div>
          </Map>
      }
    </div>
  )
}
export default HappeningMap
