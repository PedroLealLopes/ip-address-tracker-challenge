import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { term: '' }

  onFormSubmit = (event) => {
    event.preventDefault();
    
    this.props.onSubmit(this.state.term)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>Ip Address: </label>
            <input type="text"
            value={this.state.term}
            onChange={e => this.setState({term: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}
