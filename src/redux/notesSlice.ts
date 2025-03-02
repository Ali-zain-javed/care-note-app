import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCareNotes, addCareNote } from '../services/api';

export interface Note {
  id?: number;
  residentName: string;
  dateTime: string;
  content: string;
  authorName: string;
}

interface NotesState {
  notes: Note[];
  error: string | null;
}

const initialState: NotesState = {
  notes: [],
  error: null,
};

// Define the createAsyncThunk action
export const loadCareNotes = createAsyncThunk(
  'notes/loadCareNotes',
  async (_, { rejectWithValue }) => {
    try {
      const notes = await fetchCareNotes();
      return notes;
    } catch (error) {
      return rejectWithValue('Failed to fetch notes. Using offline data.');
    }
  },
);

// added createCareNote action
export const createCareNote = createAsyncThunk(
  'notes/createCareNote',
  async (note: Omit<Note, 'id'>, { rejectWithValue }) => {
    try {
      const newNote = await addCareNote(note);
      return newNote;
    } catch (error) {
      return rejectWithValue('Failed to add note. Please try again later.');
    }
  },
);

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCareNotes.fulfilled, (state, action) => {
        state.notes = action.payload;
        state.error = null;
      })
      .addCase(loadCareNotes.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const {} = notesSlice.actions;
export default notesSlice.reducer;
