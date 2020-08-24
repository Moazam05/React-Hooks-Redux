import React, { Component } from 'react';

import CommentDetails from './CommentDetails';

export class home extends Component {
  render() {
    return (
      <>
        <div className='ui container comments'>
          <CommentDetails author='Sam' />
          <CommentDetails author='Alex' />
          <CommentDetails author='Jane' />
        </div>
      </>
    );
  }
}

export default home;
