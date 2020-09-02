import { combineReducers } from 'redux';

// Static Songs List Reducer
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Start', duration: '3:15' },
    { title: 'Faded', duration: ':45' },
  ];
};

// Selected Song Reducer
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

// CombineReducers from redux
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
