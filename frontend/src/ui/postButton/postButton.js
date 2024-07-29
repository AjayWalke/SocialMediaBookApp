"use client";
import { useState } from 'react';
import React from 'react';
import "./postButton.css";
import PopUpModel from '@/components/popUpModel';
import CreateNewPost from '@/pages/home/createNewPost';

const PostButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="newPostButton" onClick={openModal}>
        <span className="plusSymbol">+</span>
        <span className="newPostText">New Post</span>
      </div>
      <PopUpModel isOpen={isModalOpen} onClose={closeModal}>
        <CreateNewPost/>
      </PopUpModel>
    </div>
  );
};

export default PostButton;