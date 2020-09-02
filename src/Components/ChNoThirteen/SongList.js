import React, { Component } from 'react';

import { connect } from 'react-redux';

export class SongList extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div>
          <h3>Song List</h3>
        </div>
      </>
    );
  }
}

// Configuring Connect with MapStateToProps
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
