import { fetchData } from './task1_wrong_url.js';
import axios from 'axios';

jest.mock('axios');

test('should handle error correctly', async () => {
  axios.get.mockRejectedValue(new Error('Network Error'));

  const result = await fetchData();

  expect(result).toBe('Error: Network Error');
});
