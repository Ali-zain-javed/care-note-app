import axios from 'axios';
const API_URL = 'http://localhost:3001/care-notes';
import { Note } from '../redux/notesSlice';

export const fetchCareNotes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addCareNote = async (note: Note) => {
  try {
    const response = await axios.post(API_URL, note);
    return response.data;
  } catch (error) {
    console.error('Error adding care note:', error);
    throw error;
  }
};
