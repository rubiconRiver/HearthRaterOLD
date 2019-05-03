import React, { useState } from "react";

export default function Login(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [userJson, setUserJson] = useState(undefined);

  function onSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:9000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        password: password
      })
    })
      .then(response => {
        if(response.ok){
          return response.json();
        } else {
          alert('Authentication Error');
        }})
      .then(json => {
        console.log(JSON.stringify(json));
        localStorage.setItem('authentication', JSON.stringify(json));
        props.history.push("/cardlist");
      })
  }

  const changeName = event => {
    setName(event.target.value);
  };

  const changePassword = event => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h1>LOGIN PAGE!!!</h1>
      <form  onSubmit={onSubmit}>
        <h4>username:</h4>
        <input type="text" onChange={changeName} />
        <h4>password:</h4>
        <input type="text" onChange={changePassword} />
        <div>
          <button type="submit">
            login
          </button>
        </div>
      </form>
    </div>
  );
}
