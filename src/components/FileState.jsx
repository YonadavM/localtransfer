import { useState, useEffect } from 'react';
import io from 'socket.io-client';


export default function FileState(props) {
  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("upload")
    uploadFile(file);
  };

  // Handle file drop
  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    console.log("dragdrop")
    uploadFile(file);
  };

  // Handle file drag over
  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  };

  // Handle file drag leave
  const handleDragLeave = (event) => {
    event.preventDefault();
  };

  // Upload file
  const uploadFile = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      // Encode the file data in base64 format
      const fileData = event.target.result.split(',')[1];

      // Send the file over the socket connection
      props.socket.emit('send-file', { filename: file.name, file: fileData });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      onDrop={handleFileDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={() => document.querySelector('input[type=file]').click()}
      className="file-input-container"
    >
      <input type="file" onChange={handleFileUpload} style={{ display: 'none' }} />
      <h3>Drag & Drop or Click to upload file</h3>
    </div>
  );
}