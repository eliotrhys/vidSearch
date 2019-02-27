import axios from 'axios';

const KEY = 'AIzaSyBU4w8wavQtN1qi8llPW3KiLswDQUHfbcw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
