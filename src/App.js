import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMarvels } from './redux/actions/marvels';
import AppComponent from './components/AppComponent';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMarvels()).then(() => {
      setLoading(true);
    });
  }, []);

  return <div className="App">{loading ? <AppComponent /> : <Loading />}</div>;
}

export default App;
