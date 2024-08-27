import axios from 'axios';

export async function fetchData() {
  try {
    const response = await axios.get('https://wrong.url.com');
    return response.data;
  } catch (error) {
    if (error.response) {
      return `Error: ${error.response.status} - ${error.response.statusText}`;
    } else if (error.request) {
      return 'Error: No response received';
    } else {
      return `Error: ${error.message}`;
    }
  }
}
