import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Bobas from "./Bobas.js";
import User from "./User";
import Order from "./Order.js";

function App() {
  const [user, setUser] = useState(null);
  const [bobas, setBobas] = useState([]);
  const [order, setOrder] = useState([]);


    useEffect(() => {
        fetch('/bobas')
            .then((r) => r.json())
            .then(bobas => setBobas(bobas))
    }, [])


  function handleOrder(id) {
    console.log(id)
    const bobaInOrder = bobas.find(
      (boba) => boba.id === id
    );
    console.log(bobaInOrder)
    if (bobaInOrder) {
      setOrder([...order, bobaInOrder]);
    }
  }

  console.log(order);



    
      function handleRemoveBobaFromOrder(bobaRemove) {
        setOrder((order) =>
          order.filter((boba) => boba.id !== bobaRemove.id)
        );
      }


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route exact path="/">
              <Home user={user}/>
            </Route>
            <Route path="/bobas">
              <Bobas handleOrder={handleOrder}/>
            </Route>
            <Route exact path="/user">
              <User user={user}setUser={setUser}/>
            </Route>
            <Route exect path="/order">
              <Order onremoveBOba={handleRemoveBobaFromOrder} order= {order}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;