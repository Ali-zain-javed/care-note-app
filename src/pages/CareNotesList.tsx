import React from 'react';
import ErrorBoundary from '../hoc/withErrorBoundary';
const CareNotesList: React.FC = () => {
  const notes: any = [
    {
      id: 1,
      residentName: 'John Doe',
    },
    {
      id: 2,
      residentName: 'Jane Doe',
    },
  ];

  return (
    <div>
      <h2>Care Notes</h2>
      <ul>
        {notes?.map((note: any) => (
          <li key={note?.id} className="border p-2 mb-2 rounded">
            <strong>{note?.residentName}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorBoundary(CareNotesList);
