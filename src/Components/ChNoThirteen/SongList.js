import React, { Component } from 'react';

import { connect } from 'react-redux';

export class SongList extends Component {
  render() {
    return (
      <>
        <div>
          <h3>Song List</h3>
        </div>
      </>
    );
  }
}

export default connect()(SongList);
