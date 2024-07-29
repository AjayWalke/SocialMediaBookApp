"use client";
import AppLogo from "@/components/appLogo";
import { useEffect, useState } from "react";
import "../styles/post/createNewPost.css";
import Input from "@/ui/input/input";
import "../styles/mainHome.css";
import {
  getLogin
} from "../api/main_home/mainHome";
import { useDispatch } from "react-redux";
import {
  setUserDetails
} from "../stores/main_home/login"
import { useRouter } from 'next/navigation';

export default function Login({ setState }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    
    if(!email || !password) {
      alert("Enter valid email and password")
    }

    const userData = await getLogin({email, password})
    setUserData(userData)
  };

  useEffect(() => {
    if(userData) {
      dispatch(setUserDetails(userData))
      router.push('/home')
    }
  }, [userData])

  return (
    <div className="login_container">
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <Input
          name="Email"
          placeholder="Enter your email"
          type="email"
          setValue={setEmail}
        />
        <Input
          name="Password"
          placeholder="Enter your password"
          type="password"
          setValue={setPassword}
        />
        <div className="post_submit"><button type="submit">Login</button></div>
      </form>
      <div className="hover_underline"><span onClick={setState}>New to Platform | <b>Sign up</b></span></div>
    </div>
  );
}