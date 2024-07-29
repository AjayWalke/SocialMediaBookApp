"use client";
import AppLogo from "@/components/appLogo";
import Login from "@/models/login";
import Register from "@/models/register";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(false)

  const loginState = () => {
    setState(false)
  }

  const registerState = () => {
    setState(true)
  }

  return (
    <div className="main_home_container">
      <div className="main_home_app_logo_container">
        <AppLogo/>
      </div>
      <div className="main_home_app_page_container">
        {
          !state && <Login setState={registerState}/>
        }
        {
          state && <Register setState={loginState}/>
        }
      </div>
    </div>
  );
}
