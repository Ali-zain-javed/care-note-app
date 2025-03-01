import React, { useEffect } from 'react';
import ErrorBoundary from '../hoc/withErrorBoundary';
import { loadCareNotes } from '../redux/notesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';

const CareNotesList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { notes, error } = useSelector((state: RootState) => state.notes);
  console.log('notes:', notes);
  console.log('error:', error);
  const notesL: any = [
    {
      id: 1,
      residentName: 'John Doe',
    },
    {
      id: 2,
      residentName: 'Jane Doe',
    },
  ];

  useEffect(() => {
    const fetchNotes = () => {
      dispatch(loadCareNotes());
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <h2>Care Notes</h2>
      <ul>
        {notesL?.map((note: any) => (
          <li key={note?.id} className="border p-2 mb-2 rounded">
            <strong>{note?.residentName}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorBoundary(CareNotesList);
