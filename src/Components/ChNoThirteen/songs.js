import React, { Component } from 'react';

import SongList from './SongList';

export class songs extends Component {
  render() {
    return (
      <>
        <div>
          <SongList />  
        </div>
      </>
    );
  }
}

export default songs;
