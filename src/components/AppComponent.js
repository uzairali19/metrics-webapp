import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Details from './Details';

const AppComponent = () => {
  const Hello = 'Hello World';
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </div>
  );
};

export default AppComponent;
