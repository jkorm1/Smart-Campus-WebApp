// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HostelPage from './screen/HostelPage';
import HostelCardIn from './screen/HostelCardIn';
import FoodJointPage from './screen/FoodJointPage'; // Import the new FoodJointPage

function App() {
  return (
    <Routes>
      <Route path="/" element={<HostelPage />} />
      <Route path="/HostelCardIn/:id" element={<HostelCardIn />} />
      <Route path="/food-joints" element={<FoodJointPage />} /> {/* Add the new route */}
    </Routes>
  );
}

export default App;
