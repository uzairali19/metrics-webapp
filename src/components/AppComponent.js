import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Details from './Details';

const AppComponent = () => {
  const [search, setSearch] = useState('');
  return (
    <div>
      <Header set={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default AppComponent;
