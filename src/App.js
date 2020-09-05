import React, { Component } from 'react'
import ipLocation from './api/ip'
import SearchBar from './components/SearchBar'

export default class App extends Component {
  state = { location: {}, isLoading: false }
  
  onSearchSubmit = async (term) => {
    this.setState({isLoading: true});

    const response = await ipLocation.get('', {
      params: { ipAddress: term }
    })

    this.setState({isLoading: false});
    console.log(response);
    this.setState({ location: response.data.location })
  }

  renderLoading(){
    return <div className="test">Loading...</div>;
  }

  render() {
    return <div style={{ height: '90vh', widht: '100vw' ,display: 'grid',placeItems: 'center' }}><SearchBar onSubmit={this.onSearchSubmit} />
    {this.state.isLoading ? this.renderLoading() : ''}
    <h1>{this.state.location.region}</h1>
    </div>
  }
}
