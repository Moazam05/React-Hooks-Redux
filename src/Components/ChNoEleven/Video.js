import React, { Component } from 'react';

import SearchBar from './SearchBar';
import YouTube from '../../Components/ChNoEleven/api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export class Video extends Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await YouTube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <>
        <div className='ui container' style={{ marginTop: '10px' }}>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className='ui grid'>
            <div className='ui row'>
              <div className='eleven wide column'>
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className='five wide column'>
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Video;
