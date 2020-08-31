import React, { Component } from 'react';

import SearchBar from './SearchBar';

export class Video extends Component {
  render() {
    return (
      <>
        <div className='ui container' style={{ marginTop: '10px' }}>
          <SearchBar />
        </div>
      </>
    );
  }
}

export default Video;
