"use client";
import Post from "@/models/post";
import "../../styles/homeContainer/homeContainer.css"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getAllPost
} from "../../api/post/post"

export default function HomeBase() {
  const userData = useSelector((state) => state.user.user)
  const router = useRouter();
  const [examplePost, setExamplePost] = useState([]);
  
  const fetch = async () => {
    const user_id = userData?.id;
    const posts = await getAllPost({ user_id })
    setExamplePost(posts)
  }

  useEffect(() => {
    if(!userData) {
      router.push('/')
      return;
    }

    fetch()
  }, [])

  return (
    <div className="homeBaseContainer">
      {
        examplePost.length > 0 && examplePost.map((post) => (
          <Post post={post}/>
        ))
      }
    </div>
  );
}