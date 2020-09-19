import React, { Component } from 'react'
import ArrowIcon from './ArrowIcon'

export default class SearchBar extends Component {
  state = { term: '' }

  onFormSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmit(this.state.term)
  }

  checkForInput

  render() {
    return (
      <>
        <div
          className={
            this.props.darkMode
              ? 'form-background form-background-dark'
              : 'form-background'
          }
        ></div>
        <h1 className='form-header'>IP Address Tracker</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            type='text'
            className='input'
            aria-label="Input for searching for any IP address or domain"
            placeholder='Search for any IP address or domain'
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
          <button aria-label="Search Button" type='submit' className='btn'>
            <ArrowIcon />
          </button>
        </form>
      </>
    )
  }
}
