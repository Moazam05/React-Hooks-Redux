import React from 'react';
import './SeasonDisplay.css';

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  const { text, iconName } = seasonConfig[season];
  // const text =
  //   season === 'Winter' ? 'Burr, it is chilly' : 'Lets hit the beach';

  // const icon = season === 'Winter' ? 'snowflake' : 'sun';

  return (
    <>
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
      </div>
    </> 
  );
};

const seasonConfig = {
  Summer: {
    text: "Let's hit the beach",
    iconName: 'sun',
  },
  Winter: {
    text: 'Burr it is cold!',
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter';
  } else {
    return lat > 0 ? 'Winter' : 'Summer';
  }
};

export default SeasonDisplay;
