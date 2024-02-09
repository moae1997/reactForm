import React from "react";
import { useState } from "react";

export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
  
    async function handleClick() {
      try {
        const response = await fetch(
            "https://fsa-jwt-practice.herokuapp.com/authenticate",
             {
               method: "GET",
               headers: {
                 "Content-Type": "application/json",
                 Authorization: `Bearer ${token}`,
               }   
              }
           );
           const result = await response.json();
           setSuccessMessage(result.message);
           const resultData = result.data;
            setUser(resultData.username);
      } catch (error) {
        setError(error.message);
      }
    }
  
    return (
      <div>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>}
        {user && <h3>Thank you, {user}</h3>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token!</button>
      </div>
    );
  }