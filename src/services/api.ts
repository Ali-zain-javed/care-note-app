import axios from 'axios';
const API_URL = 'http://localhost:3001/care-notes';

export const fetchCareNotes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
