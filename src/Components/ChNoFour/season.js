import React, { Component } from 'react';

export class season extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    return (
      <>
        <h3>Latitude: {this.state.lat} </h3>
        <br />
        Error: {this.state.errorMessage}
      </>
    );
  }
}

export default season;
