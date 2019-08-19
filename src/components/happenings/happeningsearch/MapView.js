import React from 'react'
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl'
import axios from 'axios'

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibXRjb2x2YXJkIiwiYSI6ImNqemI4emZydjA2dHIzYm80ZG96ZmQyN2wifQ.kVp6eB7AkWjslUOtsJyLDQ'
})

class MapView extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.selectHappening = this.selectHappening.bind(this)
  }

  componentDidMount() {
    axios.get('/api/happenings')
      .then(res => this.setState({ happenings: res.data }))
  }

  selectHappening(happening) {
    this.setState({ selectedHappening: happening })
  }

  render() {
    console.log(this.state)

    return (
      <div className="has-ratio">
        {!this.state.happenings && <h2 className="title is-2">Loading...</h2>}
        {this.state.happenings &&
            <Map
              center={[-0.088817, 51.514271]}
              style="mapbox://styles/mapbox/streets-v9"
              containerStyle={{
                height: '56.25vh',
                width: '100vh'
              }}
            >
              {this.state.happenings.map(happening =>
                <div key={happening._id}>
                  <Marker
                    coordinates={[happening.lon, happening.lat]}
                    onClick={() => this.selectHappening(happening)}
                    ariaRole='button'
                  >
                    {<span className="icon is-medium"><i className="fas fa-map-marker-alt"aria-hidden="true"></i></span>}
                  </Marker>
                  {this.state.selectedHappening === happening &&
                    <Popup
                      coordinates={[happening.lon, happening.lat]}
                      offset={15}
                    >{`${happening.name}`}</Popup>
                  }
                </div>
              )}
            </Map>
        }
      </div>
    )
  }
}
export default MapView
