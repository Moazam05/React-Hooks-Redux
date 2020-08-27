import React, { Component } from 'react';

export class Spinner extends Component {
  render() {
    return (
      <>
        <div>
          {/* <div className='ui active dimmer'> */}
          <div className='ui active dimmer'>
            <div className='ui big text loader'>Loading...</div>
          </div>
          <p />
          {/* </div> */}
        </div>
      </>
    );
  }
}

export default Spinner;
