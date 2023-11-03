import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './Calculator';
import { HashRouter } from 'react-router-dom';
import UploadDocuments from './UploadDocuments';

function App() {
  return (
    <HashRouter>
      <div>
        <h1>Congratulations on your application Approval!</h1>
        <h2>Select the terms that interest you based on your approval conditions.</h2>
        <Routes> {/* Wrap Route in Routes */}
          <Route path="/" element={<Calculator />} />
          <Route path="/upload" element={<UploadDocuments />} />  
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
