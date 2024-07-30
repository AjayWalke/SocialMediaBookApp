"use client";
import { useEffect, useState } from "react";
import "../styles/post/createNewPost.css"
import { createNewPost, uploadImage } from "@/api/post/post";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [state1, setState1] = useState(false)
  const [postMessage, setPostMessage] = useState('')
  const [link, setLink] = useState('')
  const [message, setMessage] = useState('');
  const userData = useSelector((state) => state.user.user)

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    const response = await uploadImage({ formData })
    setMessage(response?.message)
    setLink(response?.link)
  };

  const handlePost = async () => {
    const userId = userData.id

    if(!link || !postMessage || !userId) {
      alert('select all details')
      return;
    }
  
    const currentDate = new Date();
    const dateOfPost = currentDate.toISOString();

    await createNewPost({ userId, dateOfPost, link, postMessage})
    window.location.reload()
  }

  return (
    <>
      <div className="description_container">
        <span className="description_tag">
          Description
        </span>
        <textarea
          className="input_description"
          placeholder="Enter Description......"
          onChange={(e) => setPostMessage(e.target.value)}
        />
      </div>
      <div>
        <h1 className="upload_heading">Upload Image</h1>
        <div className="upload_container">
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <div className="upload_text" onClick={handleUpload}><span>Upload</span></div>
        </div>
        <div className="upload_error_msg">
          <p>{message}</p>
        </div>
      </div>
      <div className="post_submit" onClick={handlePost}><button>Post</button></div>
    </>
  );
}