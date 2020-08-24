import React, { Component } from 'react';

import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

export class home extends Component {
  render() {
    return (
      <>
        <div className='ui container comments'>
          <ApprovalCard>
            <CommentDetails
              author='Sam'
              timeAgo='Today at 4:45PM'
              content='Nice blog post'
            />
          </ApprovalCard>

          <CommentDetails
            author='Alex'
            timeAgo='Today at 2:00PM'
            content='I like the subject'
          />
          <CommentDetails
            author='Jane'
            timeAgo='Today at 5:00PM'
            content='I like the writing'
          />
        </div>
      </>
    );
  }
}

export default home;
