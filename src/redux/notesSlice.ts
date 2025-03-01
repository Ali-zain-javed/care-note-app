import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Note {
  id: number;
  residentName: string;
  dateTime: string;
  content: string;
  authorName: string;
}

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
});

export const {} = notesSlice.actions;
export default notesSlice.reducer;
