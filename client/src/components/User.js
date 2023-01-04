import React, { useState, useEffect } from 'react';
import UserOrders from './UserOrders.js';



function User({ user, setUser, submitBobasInOrder, order}) {
  const [username, setUsername] = useState(user.username);
  const [first_name, setFirstname] = useState(user.first_name);
  const [last_name, setLastname] = useState(user.last_name);
  const [avatar, setAvatar] = useState(user.avatar);
  const [email, setEmail] = useState(user.email);
  const [showDetails, setShowDetails] = useState(false);
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    fetch('/users')
        .then((r) => r.json())
        .then(users => setUsers(users))
}, []);

function handleDelete(){
  fetch(`users/${user.id}`, {
      method: "DELETE",
  })
  handleDeleteUser(user.id);
  window.location.reload();
};



function handleDeleteUser(id) {
    const newUsersList = users.filter((user) => 
    user.id !== id)
    setUsers(newUsersList)
}
    
  function handleClick() {
    setShowDetails((showDetails) => !showDetails);
  }


  function handleUser(result) {
    setUser(result)
};

const handleInputChange = (e) => {
  console.log(e.target.value)
  setUsername(e.target.value)
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
        username: username,
        last_name: last_name,
        first_name: first_name,
        avatar: avatar,
        email: email
      }),
    })
      .then((r) => r.json())
      .then((result) => handleUser(result))
      
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser();
  }
    

  return (
    <>
    <li className="card3">
        <br></br>
      <img className="cards" src={user.avatar} alt={user.username} />
      <h2>username: {user.username}</h2>
      <h4>{user.first_name}</h4>
      <h4>{user.last_name}</h4>
      <p>Email: {user.email}</p>
      <button id="button1" className="emoji-button delete" onClick={handleClick}>Change User</button>
          {showDetails ?
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
       : null}
      <button className="deleteButtons" onClick={handleDelete}>Remove User</button>
      </li>
      <UserOrders order={order}>My orders</UserOrders>
      {submitBobasInOrder}
      </>
        );
}
export default User;

