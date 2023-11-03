import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './Calculator';

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to the Loan Calculator</h1>
        <Routes> {/* Wrap Route in Routes */}
          <Route path="/" element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
