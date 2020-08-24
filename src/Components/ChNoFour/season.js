import React from 'react';

import SeasonDisplay from './SeasonDisplay';

const Season = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return (
    <>
      <h3>Hi There!</h3>
      <SeasonDisplay />
    </>
  );
};

export default Season;
