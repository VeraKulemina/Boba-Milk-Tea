import React, { useState } from 'react';

function User({ user }) {
  // Use the user data to initialize the component's state
  // const [error, setError] = useState(null);
  const [userData, setUserData] = useState(user);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [avatar, setAvatar] = useState();
  const [email, setEmail] = useState();
  // const [isLoaded, setIsLoaded] = useState(false);
  const [id, setId] = useState();
  const [updatedUser, setUpdatedUser] = useState("");


  const handleInputChange = (e) => {
    console.log(e.target.value)
    setUpdatedUser(e.target.value)
    // const { username, value } = e.target;
    // setUpdatedUser({ ...updatedUser, [username]: value});
  };

  function handleUser(updatedUser) {
    setUsers((users) =>
        users.map((myuser) => {
        return myuser.id === updatedUser.id ? updatedUser : myuser;
    })
    );
}



  const updateUser = () => {
    fetch(`./users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: updatedUser,
        // lastname: lastname,
        // firstname: firstname,
        // avatar: avatar,
        // email: email
      }),
      
    })
    // console.log(updatedUser)
      .then((r) => r.json())
      .then((result) => console.log(result))
      
  }

  // useEffect(() => {
  //   fetch(`/me`)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setUsername(username);
  //         setFirstname(firstname);
  //         setLastname(lastname);
  //         setEmail(email);
  //         setAvatar(avatar);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )

  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser();
  }
    

  return (
    <li className="card3">
        <br></br>
      <img src={userData.avatar} alt={userData.username} />
      <form onSubmit={handleSubmit} >
      <input 
        type="text"
        username="username"
        defaultValue={username}
        onChange={handleInputChange} 
      />
      <button onClick={updateUser}>Change Username</button>
      </form>
      <h1>{userData.username}</h1>
      <h1>{userData.firstname}</h1>
      <h1>{userData.lastname}</h1>
      <p>{userData.email}</p>
      </li>
        );
}
export default User;

