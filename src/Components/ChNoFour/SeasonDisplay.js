import React from 'react';

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

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  const { text, iconName } = seasonConfig[season];
  // const text =
  //   season === 'Winter' ? 'Burr, it is chilly' : 'Lets hit the beach';

  // const icon = season === 'Winter' ? 'snowflake' : 'sun';

  console.log(season);
  return (
    <>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      {/* <i className={icon} /> */}
      <i className={`${iconName} icon`} />
      {/* <i className='disabled users icon'></i> */}
    </>
  );
};

export default SeasonDisplay;
