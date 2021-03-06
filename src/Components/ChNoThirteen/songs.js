import React, { Component } from 'react';

import SongList from './SongList';
import SongDetail from './SongDetails';

export class songs extends Component {
  render() {
    return (
      <>
        <div className='ui container grid' style={{ marginTop: '10px' }}>
          <div className='ui row'>
            <div className='column eight wide'>
              <SongList />
            </div>
            <div className='column eight wide'>
              <SongDetail />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default songs;
