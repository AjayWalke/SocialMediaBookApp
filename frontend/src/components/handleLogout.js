"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearUserDetails } from "../stores/main_home/login"

export default function HandleLogOut() {
  const dispatch = useDispatch();

  const temp = () => {
    dispatch(clearUserDetails());
  }

  useEffect(() => {
    temp();
  }, [])

  return (
    <></>
  );
};