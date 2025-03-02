import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCareNotes, addCareNote } from '../services/api';
import { saveNotesToLocalDB, getNotesFromLocalDB } from '../services/localdb';

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
      const notes = await fetchCareNotes(); // Fetch from API
      await saveNotesToLocalDB(notes); // Save to local PouchDB
      const sortedNotes = notes?.reverse();

      return sortedNotes.slice(0, 5);
    } catch (error) {
      const offlineNotes = await getNotesFromLocalDB(); // Fetch from local PouchDB
      const sortedOfflineNotes = offlineNotes?.reverse();

      return sortedOfflineNotes.slice(0, 5);
    }
  },
);

// added createCareNote action
export const createCareNote = createAsyncThunk(
  'notes/createCareNote',
  async (note: Omit<Note, 'id'>, { rejectWithValue }) => {
    try {
      const newNote = await addCareNote(note);
      await saveNotesToLocalDB([newNote, ...(await getNotesFromLocalDB())]);
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
      })
      .addCase(createCareNote.fulfilled, (state, action) => {
        state.notes.unshift(action.payload);
        if (state.notes.length > 5) state.notes.pop();
        state.error = null;
      })
      .addCase(createCareNote.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const {} = notesSlice.actions;
export default notesSlice.reducer;
