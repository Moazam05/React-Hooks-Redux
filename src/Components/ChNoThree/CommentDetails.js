import React, { Component } from 'react';

import faker from 'faker';

export class CommentDetails extends Component {
  render() {
    return (
      <>
        <div className='comment'>
          <a href='/' className='avatar'>
            <img alt='avatar' src={faker.image.avatar()} />
          </a>
          <div className='content'>
            <a href='/' className='author'>
              Sam
            </a>
            <div className='metadata'>
              <span className='date'>Today at 11:30AM</span>
            </div>
            <div className='text'>Nice blog post!</div>
          </div>
        </div>
      </>
    );
  }
}

export default CommentDetails;
