import axios from 'axios';

const KEY = 'AIzaSyCQ5cCEIx_oETHIZV67rcAO20Hfvv6hq7o';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 7,
    key: KEY,
  },
});
