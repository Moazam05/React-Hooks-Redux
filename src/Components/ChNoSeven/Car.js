import React, { Component } from 'react';

import axios from 'axios';

import SearchBar from './SearchBar';

export class Car extends Component {
  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID DWoxu0TqVdgTSHg2R0cyeY6Ew958b-_0kblxGKMB2S0',
      },
    });
    console.log(response.data.results);
  }
  render() {
    return (
      <>
        <div className='ui container' style={{ marginTop: '10px' }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
      </>
    );
  }
}

export default Car;
