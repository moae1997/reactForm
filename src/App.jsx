import React from "react";
import Authenticate from "./components/Authenitcate";
import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
export default function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}