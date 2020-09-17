import React from 'react'
import ReactMapGL, { FlyToInterpolator, Marker } from 'react-map-gl'
// 3rd-party easing functions
import { easeCubic } from 'd3-ease'
import LocationMarkerSVG from './LocationMarkerSVG'

var location = {};

class MyApp extends React.Component {
  state = {
    viewport: {
      width: '100%',
      height: '100%',
      longitude: this.props.location.lng ? this.props.location.lng : -9.142685 ,
      latitude: this.props.location.lat ? this.props.location.lat : 38.7223,
      zoom: 10,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic,
    },
  }

  _onViewportChange = (viewport) => {
    this.setState({ viewport })
  }

  render() {
    if (Object.keys(this.props.location).length > 0 && location !== this.props.location) {
      location = this.props.location;
      console.log(this.props.location.lat)
      const viewport = {
        ...this.state.viewport,
        longitude: this.props.location.lng,
        latitude: this.props.location.lat,
        zoom: 12,
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
        transitionEasing: easeCubic,
      }
      this.setState({ viewport })
    }

    return (
      <>
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={this._onViewportChange}

          mapStyle={this.props.darkMode ? 'mapbox://styles/pedrolopes98/ckex5c6wt0low19pacrglpa8m' : 'mapbox://styles/pedrolopes98/ckex5bddc1dyz19oruabxfzvr'}
        >
          <Marker latitude={this.props.location.lat ? this.props.location.lat : 38.7223} longitude={this.props.location.lng ? this.props.location.lng : -9.142685}>
            <LocationMarkerSVG color='red' width='30px' height='30px'/>
          </Marker>
        </ReactMapGL>
      </>
    )
  }
}

export default MyApp
