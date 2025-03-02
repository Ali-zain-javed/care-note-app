import PouchDB from 'pouchdb-browser';
import { Note } from '../redux/notesSlice';

const db = new PouchDB('care_notes');

export const saveNotesToLocalDB = async (notes: Note[]) => {
  try {
    for (const note of notes) {
      const noteId = note.id?.toString() || new Date().toISOString(); // Ensure `_id` is unique
      const existingNote = await db.get(noteId).catch(() => null); // Check if the note exists

      if (existingNote) {
        //*Update existing note*
        await db.put({ ...existingNote, ...note });
      } else {
        // *Insert new note*
        await db.put({ ...note, _id: noteId });
      }
    }
  } catch (error) {
    console.error('Error saving notes to PouchDB:', error);
  }
};

export const getNotesFromLocalDB = async (): Promise<Note[]> => {
  try {
    const result = await db.allDocs({ include_docs: true, descending: true });
    const uniqueNotes: { [key: string]: Note } = {};

    result.rows.forEach((row) => {
      if (!uniqueNotes[row.id]) {
        uniqueNotes[row.id] = row.doc as unknown as Note;
      }
    });

    return Object.values(uniqueNotes); // Return only unique notes
  } catch (error) {
    console.error('Error fetching notes from PouchDB:', error);
    return [];
  }
};

export const clearPouchDB = async () => {
  await db.destroy();
};
