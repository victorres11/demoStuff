import React from 'react';
import './UploadDocuments.css'

const UploadDocuments = () => {
  return (
    <div className="upload-container">
    <h2>Upload Your Documents</h2>
    <div className="upload-icon">
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 10V16M17 11L12 6L7 11M6 20V14H18V20" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    </div>
    <p>Click the icon to upload files.</p>
  </div>
  );
};

export default UploadDocuments;