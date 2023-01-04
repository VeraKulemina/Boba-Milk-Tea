import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

function NavBar({ user, setUser, order }) {
  const orderNumber = order.map((or) => or.quantity)

  function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];

    }
    return sum;
  }

  const sum = sumArray(orderNumber);

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
    {user ? (
      <div className="container">
        <NavLink className="link" to="/bobas">Menu</NavLink>
        <NavLink className="link" to="/order">My Order {sum}</NavLink>
        <NavLink className="link" to="/user">
        <img id="id" src={user.avatar} alt="current user"/>
        </NavLink>
      <button  className="button" onClick={handleLogoutClick}>Logout</button>
      </div>
    ) : (
      <>
        <NavLink className="link" to="/bobas">Menu</NavLink>
        <NavLink  className="link" to="/signup">Signup</NavLink>
        <NavLink  className="link" to="/login">Login</NavLink>
      </>
    )}
  </div>
</header>
  );
}

export default NavBar;