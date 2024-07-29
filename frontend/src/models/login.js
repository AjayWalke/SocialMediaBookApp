"use client";
import AppLogo from "@/components/appLogo";
import { useState } from "react";
import "../styles/post/createNewPost.css";
import Input from "@/ui/input/input";
import "../styles/mainHome.css";

export default function Login({ setState }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login_container">
      <h2>Login</h2>
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
      <div className="post_submit"><button onClick={handleLogin}>Login</button></div>
      <div className="hover_underline"><span onClick={setState}>New to Platform | <b>Sign up</b></span></div>
    </div>
  );
}