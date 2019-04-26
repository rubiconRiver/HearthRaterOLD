import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userJson, setUserJson] = useState(undefined);

  function onSubmit() {
    fetch("http://localhost:9000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(json => setUserJson(json));
  }

  const changeEmail = event => {
    setEmail(event.target.value);
  };

  const changePassword = event => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h1>LOGIN PAGE!!!</h1>
      <form>
        <h4>username:</h4>
        <input type="text" onChange={changeEmail} />
        <h4>password:</h4>
        <input type="text" onChange={changePassword} />
        <div>
          <button type="submit" onSubmit={onSubmit}>
            login
          </button>
        </div>
      </form>
    </div>
  );
}
