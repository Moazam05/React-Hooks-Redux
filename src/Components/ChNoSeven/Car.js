import React, { Component } from 'react';

// import axios from 'axios';

import SearchBar from './SearchBar';
import unsplash from '../../api/unsplash';

export class Car extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get(
      'https://api.unsplash.com/search/photos',
      {
        params: { query: term },
      }
    );

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <>
        <div className='ui container' style={{ marginTop: '10px' }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          Found: {this.state.images.length} images
        </div>
      </>
    );
  }
}

export default Car;
