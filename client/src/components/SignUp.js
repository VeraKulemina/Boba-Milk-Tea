import React, { useState } from "react";
import { useHistory } from "react-router-dom"


function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([])
  const history = useHistory()


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,

      }),
    }).then((r) => {
      if (r.ok) {
        r.json()
          .then((user) => {
            setUser(user)
          });
      } else {
        r.json()
          .then((data) => {
            setErrors(data.errors)
          });
      }
      history.push("/bobas")

    })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <ul>
          {errors.map((error =>
          <li style= {{color: "red"}}>{error}</li>
        ))
      }
        </ul>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="username">Email</label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;