import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CareNotesList from './pages/CareNotesList';
function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
