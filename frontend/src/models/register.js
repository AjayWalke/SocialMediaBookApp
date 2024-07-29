"use client";
import AppLogo from "@/components/appLogo";
import { useState } from "react";
import "../styles/post/createNewPost.css";
import Input from "@/ui/input/input";
import "../styles/mainHome.css";
import {
  sendNewRegistration
} from "../api/main_home/mainHome"
import { useRouter } from "next/navigation";

export default function Register({ setState }) {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [reenteredPassword, setReenteredPassword] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    if(password !== reenteredPassword) {
      alert('Password Didn\'t match')
    }

    sendNewRegistration({username, name, address, email, password})
    window.location.reload();
  };

  return (
    <div className="register_container">
      <h2>Register</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
        <Input name="Username" placeholder="Enter your username" type="text" setValue={setUsername} />
        <Input name="Name" placeholder="Enter your name" type="text" setValue={setName} />
        <Input name="Address" placeholder="Enter your address" type="text" setValue={setAddress} />
        <Input name="Email" placeholder="Enter your email" type="email" setValue={setEmail} />
        <Input name="Password" placeholder="Enter your password" type="password" setValue={setPassword} />
        <Input name="Re-enter Password" placeholder="Re-enter your password" type="password" setValue={setReenteredPassword} />
        <div className="post_submit"><button type="submit">Register</button></div>
      </form>
      <div className="hover_underline"><span onClick={setState}>Existing User | <b>Sign in</b></span></div>
    </div>
  );
}
