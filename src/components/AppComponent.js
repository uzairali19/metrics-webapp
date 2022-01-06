import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Details from './Details';

const AppComponent = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default AppComponent;
