import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HostelPage from './screen/HostelPage';
import HostelCardIn from './screen/HostelCardIn';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HostelPage />} />
      <Route path="/HostelCardIn/:id" element={<HostelCardIn />} />
    </Routes>
  );
}

export default App;
