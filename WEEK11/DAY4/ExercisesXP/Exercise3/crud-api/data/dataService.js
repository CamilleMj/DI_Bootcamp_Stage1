const axios = require('axios');
const data = axios();

export const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
};
  