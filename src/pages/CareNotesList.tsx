import React, { useEffect } from 'react';
import ErrorBoundary from '../hoc/withErrorBoundary';
import { loadCareNotes } from '../redux/notesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import CreateCareNotesScreen from './CareNotesScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import moment from 'moment';

const CareNotesList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { notes, error } = useSelector((state: RootState) => state.notes);

  useEffect(() => {
    const fetchNotes = () => {
      dispatch(loadCareNotes());
    };

    fetchNotes();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="max-w-5xl mx-auto mt-6 p-4 border rounded shadow-lg bg-gray-200 mt-12">
        <h2 className="text-xl font-semibold mb-4">Care Notes</h2>
        <CreateCareNotesScreen />
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <ul>
          {notes?.map((note) => (
            <li key={note?.id} className="border p-3 mb-3 rounded bg-white shadow">
              <strong className="block text-lg font-bold">{note?.residentName}</strong>
              <span className="text-gray-500 text-sm">
                {note?.dateTime ? moment(note?.dateTime).format('YYYY-MM-DD hh:mm A') : ''} -{' '}
                {note?.authorName}
              </span>
              <p className="mt-1 text-gray-600 font-bold">{note?.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ErrorBoundary(CareNotesList);
