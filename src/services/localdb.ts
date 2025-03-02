import PouchDB from 'pouchdb-browser';
import { Note } from '../redux/notesSlice';

const db = new PouchDB('care_notes');

export const saveNotesToLocalDB = async (notes: Note[]) => {
  try {
    for (const note of notes) {
      const existingNote = await db.allDocs({ include_docs: true, descending: true });

      if (existingNote.rows.some((row) => Number(row.id) === note.id)) {
        continue;
      }
      await db.put({ ...note, _id: String(note.id) });
    }
  } catch (error) {
    console.error('Error saving notes to PouchDB:', error);
  }
};

export const getNotesFromLocalDB = async (): Promise<Note[]> => {
  try {
    const result = await db.allDocs({ include_docs: true, descending: true });
    const uniqueNotes: { [key: string]: Note } = {};
    debugger;
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
