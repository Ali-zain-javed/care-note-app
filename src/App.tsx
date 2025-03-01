import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CareNotesList from './pages/CareNotesList';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <CareNotesList />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
