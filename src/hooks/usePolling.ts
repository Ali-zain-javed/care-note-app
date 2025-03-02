import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { loadCareNotes } from '../redux/notesSlice';

const usePolling = (interval: number = 60000) => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCareNotes());
    const polling = setInterval(() => dispatch(loadCareNotes()), interval);
    return () => clearInterval(polling);
  }, [dispatch, interval]);
};

export default usePolling;
