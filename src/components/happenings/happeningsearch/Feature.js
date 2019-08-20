import React from 'react'
import { Link } from 'react-router-dom'
import mapboxgl from 'mapbox-gl'
import ReactMapboxGl from "react-mapbox-gl"
import { Layer, Feature, Source } from "react-mapbox-gl"


const Features = ({ lon, lat }) => {
  return(
<Feature coordinates={ [{lon}, {lat}] } />
)
}

export default Features
