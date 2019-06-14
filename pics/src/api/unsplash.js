import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 34bf5a36087ffadcaef6beb73a3d04af326786cda6baea79c37d230d6cf68975'
      }
});