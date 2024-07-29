"use client";
import { useState } from "react";
import "../styles/post/createNewPost.css"

export default function Upload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    console.log('hello')
    // if (!file) {
    //   setMessage('Please select a file.');
    //   return;
    // }

    // const formData = new FormData();
    // formData.append('file', file);

    // try {
    //   const response = await fetch('http://localhost:3000/upload', {
    //     method: 'POST',
    //     body: formData,
    //   });

    //   const result = await response.json();

    //   if (response.ok) {
    //     setMessage(`File uploaded successfully. Folder link: ${result.folderLink}`);
    //   } else {
    //     setMessage(`Error: ${result.message}`);
    //   }
    // } catch (error) {
    //   setMessage(`Error: ${error.message}`);
    // }
  };

  return (
    <div>
      <h1 className="upload_heading">Upload Image</h1>
      <div className="upload_container">
        <input type="file" onChange={handleFileChange} />
        <div className="upload_text" onClick={handleUpload}><span>Upload</span></div>
      </div>
      <div className="upload_error_msg">
        <p>{message}</p>
      </div>
    </div>
  );
}