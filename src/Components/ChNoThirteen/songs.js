import React, { Component } from 'react';

import SongList from './SongList';

export class songs extends Component {
  render() {
    return (
      <>
        <div className='ui container grid' style={{ marginTop: '10px' }}>
          <div className='ui row'>
            <div className='column eight wide'>
              <SongList />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default songs;
 