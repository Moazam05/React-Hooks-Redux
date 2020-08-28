import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID DWoxu0TqVdgTSHg2R0cyeY6Ew958b-_0kblxGKMB2S0',
  },
});
