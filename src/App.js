import React, { Component } from 'react'
import Swal from 'sweetalert2'
import ipLocation from './api/ip'
import SearchBar from './components/SearchBar'
import LocationBar from './components/LocationBar'
import Map from './components/Map'
import LightModeSVG from './components/LightmodeSVG'
import DarkModeSVG from './components/DarkmodeSVG'

export default class App extends Component {
  state = { location: {}, isLoading: false, error: false, darkMode: false, width: 0}

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    console.log(window.innerWidth)
    this.setState({ width: window.innerWidth });
  }

  onSearchSubmit = async (term) => {
    try {
      this.setState({ isLoading: true })

      const response = await ipLocation.get('', {
        params: { ipAddress: term },
      })
      response.data.location.isp = String(response.data.isp)
      response.data.location.ip = String(response.data.ip)
      this.setState({ isLoading: false, location: response.data.location })
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check if you wrote your correct IPv4 or IPv6 Address!',
      })
      this.setState({ isLoading: false, error: true })
    }
  }

  darkModeHandler = () => {
    this.setState({darkMode: !this.state.darkMode})
  }

  renderLoadingBar() {
    if(this.state.darkMode){
      return <div className='loading loading-dark'>Loading...</div>
    }else{
      return <div className='loading'>Loading...</div>
    }
  }

  isObjEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object
  }

  isScreenMobile() {
    if(this.state.width > 600){
      return <span>
      Dark mode: 
      <button className='dark-mode-btn' onClick={(e) => {e.preventDefault();this.darkModeHandler()}}>
        {this.state.darkMode ? 'ON' : 'OFF'}
      </button>
    </span>
    }else{
      return <button className={this.state.darkMode ? 'dark-mode-btn' : 'dark-mode-btn dark-mode-btn-dark'} onClick={(e) => {e.preventDefault();this.darkModeHandler()}}>
      {this.state.darkMode ? <LightModeSVG height='20px' width='20px'/> : <DarkModeSVG  height='20px' width='20px' />}
    </button>
    }
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? this.renderLoadingBar() : ''}
        <div className='dark-mode-container'>
          {this.isScreenMobile()}
        </div>
        <div className='form-container'>
          <SearchBar darkMode={this.state.darkMode} onSubmit={this.onSearchSubmit} />
          <LocationBar location={this.state.location} />
        </div>

        <div className='test' id='map'>
          <Map darkMode={this.state.darkMode} location={this.state.location} />
        </div>
      </div>
    )
  }
}
