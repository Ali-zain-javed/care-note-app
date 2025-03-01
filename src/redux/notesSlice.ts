import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
});

export const {} = notesSlice.actions;
export default notesSlice.reducer;
