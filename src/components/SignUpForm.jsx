import React from "react";
import { useState } from "react";




export default function SignUpForm({token, setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
    
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });
      const result = await response.json();
      setToken(result.token);
      setUsername("");
      setPassword("");
      console.log("Success:", result);
        } catch (error) {
          setError(error.message);
        }
      }

    return <><h2>Sign Up!</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit} >
  <label>
    Username: <input value={username} onChange={(e) => setUsername(e.target.value)} minLength={8} required/>
  </label>
  <label>
    Password: <input value={password} onChange={(e) => setPassword(e.target.value)} required/>
  </label>
  <button>Submit</button>
</form></>;
  }