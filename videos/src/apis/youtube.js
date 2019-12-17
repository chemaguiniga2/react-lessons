import axios from 'axios';

const KEY = 'AIzaSyAWqEDgXR7ZN015XF_9q39JHQfvl8Vjd7c';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: `${KEY}`,
  }
})