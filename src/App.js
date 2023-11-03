import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './Calculator';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div>
        <h1>Welcome to the Loan Calculator</h1>
        <Routes> {/* Wrap Route in Routes */}
          <Route path="/" element={<Calculator />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
