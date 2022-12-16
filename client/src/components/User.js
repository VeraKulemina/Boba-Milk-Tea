import React, { useState } from 'react';

function User({ user, setUser }) {
  const [username, setUsername] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState();
  const [updatedUser, setUpdatedUser] = useState("");


  function handleUser(result) {
    setUser(result)
};

const handleInputChange = (e) => {
  console.log(e.target.value)
  setUpdatedUser(e.target.value)
};

const handleInputChange1 = (e) => {
  console.log(e.target.value)
  setFirstname(e.target.value)
};

const handleInputChange2 = (e) => {
  console.log(e.target.value)
  setLastname(e.target.value)
};

const handleInputChange3 = (e) => {
  console.log(e.target.value)
  setEmail(e.target.value)
};

const handleInputChange4 = (e) => {
  console.log(e.target.value)
  setAvatar(e.target.value)
};



  const updateUser = () => {
    fetch(`./users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: updatedUser,
        last_name: last_name,
        first_name: first_name,
        avatar: avatar,
        email: email
      }),
    })
      .then((r) => r.json())
      .then((result) => handleUser(result))
      // setAvatar(""),
      // setUsername(""),
      // setUpdatedUser(""),
      // setUsername(""),
      // setLastname(""),
      // setFirstname(""),
      // setEmail("")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser();
  }
    

  return (
    <li className="card3">
        <br></br>
      <img className="cards" src={user.avatar} alt={user.username} />
      <h1>{user.username}</h1>
      <h2>{user.first_name}</h2>
      <h1>{user.last_name}</h1>
      <p>{user.email}</p>
      <form onSubmit={handleSubmit} >
      <input 
        type="text"
        username="username"
        defaultValue={username}
        onChange={handleInputChange} 
        placeholder="username"
      />
      <button onClick={updateUser}>Change Username</button>      
      <input 
        type="text"
        first_name="firstname"
        defaultValue={first_name}
        onChange={handleInputChange1} 
      />
      <button onClick={updateUser}>Change FirstName</button>
      <input 
        type="text"
        last_name="last_name"
        defaultValue={last_name}
        onChange={handleInputChange2} 
      />
      <button onClick={updateUser}>Change Last Name</button>
      <input 
        type="text"
        email="email"
        defaultValue={email}
        onChange={handleInputChange3} 
      />
      <button onClick={updateUser}>Change Email</button>
      <input 
        type="text"
        avatar="avatar"
        defaultValue={avatar}
        onChange={handleInputChange4} 
      />
      <button onClick={updateUser}>Change Avatar</button>
      </form>
      
      </li>
        );
}
export default User;

