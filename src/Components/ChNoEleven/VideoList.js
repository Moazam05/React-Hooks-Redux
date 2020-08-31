import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem />;
  });
  return (
    <>
      <div>
        <h3>{renderedList}</h3>
      </div>
    </>
  );
};

export default VideoList;
