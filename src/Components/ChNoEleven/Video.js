import React, { Component } from 'react';

import SearchBar from './SearchBar';
import YouTube from '../../Components/ChNoEleven/api/youtube';
import VideoList from './VideoList';

export class Video extends Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await YouTube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <>
        <div className='ui container' style={{ marginTop: '10px' }}>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <VideoList videos={this.state.videos} />
        </div>
      </>
    );
  }
}

export default Video;
