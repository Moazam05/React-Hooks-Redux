import React, { Component } from 'react';

import CommentDetails from './CommentDetails';

export class home extends Component {
  render() {
    return (
      <>
        <div className='ui container comments'>
          <CommentDetails author='Sam' timeAgo='Today at 4:45PM' />
          <CommentDetails author='Alex' timeAgo='Today at 2:00PM' />
          <CommentDetails author='Jane' timeAgo='Today at 5:00PM' />
        </div>
      </>
    );
  }
}

export default home;
