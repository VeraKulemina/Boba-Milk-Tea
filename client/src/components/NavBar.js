import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom"

function NavBar({ user, setUser }) {

  const history = useHistory() 

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/")
      }
    });
  }

  return (
    <header>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        {user ? (
          <div className="container">
            <NavLink className="link" to="/bobas">Menu</NavLink>
            <NavLink className="link" to="/user">{user.avatar}</NavLink>
          <button onClick={handleLogoutClick}>Logout</button>
          </div>
        ) : (
          <>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;