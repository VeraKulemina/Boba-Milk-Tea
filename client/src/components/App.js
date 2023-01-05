import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import CoffeeBar from "./CoffeeBar";
// import Home from "./Home";
import Bobas from "./Bobas.js";
import User from "./User";
import Order from "./Order.js";




function App() {
  const [user, setUser] = useState(null);
  const [bobas, setBobas] = useState([]);
  const [order, setOrder] = useState([]);
  const [orderId, setOrderId] = useState([]);
  const [bobaId, setBobaId] = useState(null);


    useEffect(() => {
      fetch('/bobas')
        .then((r) => r.json())
        .then(bobas => setBobas(bobas));
        
      const storedCart = JSON.parse(localStorage.getItem('cart'));
      if (storedCart) {
        setOrder(storedCart);
      }
    }, []);
    
  const handleOrder = (id, event) =>  {
    event.stopPropagation();
    setBobaId(id)
    const bobaInOrder = bobas.find(
      (boba) => boba.id === id
    );
    //set a variable to the JSON parsed cart array
      const checkBobas = JSON.parse(localStorage.getItem('cart'));
      // checkBobas === [{"id":17,"name":"Classic Black","image":"/images/boba16.png","price":5.49,"category":"Specialty","quantity":1},{"id":18,"name":"Hibiscus Mint Iced Tea","image":"/images/boba17.png","price":5.49,"category":"Specialty"}]
      // localBoba === {"id":17,"name":"Classic Black","image":"/images/boba16.png","price":5.49,"category":"Specialty", "qauntitiy": 1}
      // localBobaIndex === 0
      //conditional to check if a boba with the same id is already in the cart array
      if (checkBobas != null) { 
        let localBoba = checkBobas.find((boba) => boba.id === id);
        if (localBoba != null) {
          const localBobaIndex = checkBobas.findIndex((boba) => boba.id === id);
          localBoba.quantity += 1;
          checkBobas[localBobaIndex] = localBoba;
          localStorage.setItem('cart', JSON.stringify(checkBobas));
          setOrder(checkBobas);
        } else {
          bobaInOrder.quantity = 1;
          const updatedCart = [...order, bobaInOrder]
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          setOrder(updatedCart)
        }
      } else {
        bobaInOrder.quantity = 1;
        const updatedCart = [...order, bobaInOrder]
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setOrder(updatedCart)
      }
      
    if (bobaInOrder) {

      const user_id = user.id
      fetch('/orders', {
        method: 'POST',
        body: JSON.stringify({ 
          date: new Date(),
          comment: " ",
          user_id: user_id 
        }),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => res.json())
        .then(response => {
          //console.log('Success:', JSON.stringify(response))
          const checkBobas = JSON.parse(localStorage.getItem('cart'));
          let localBoba = checkBobas.find((boba) => boba.id === id);
          if (localBoba != null) {
            const localBobaIndex = checkBobas.findIndex((boba) => boba.id === id);
            if (localBoba.orders != null) {
              localBoba.orders = [...localBoba.orders, response];
            } else {
              localBoba.orders = [response];
            }
            checkBobas[localBobaIndex] = localBoba;
            localStorage.setItem('cart', JSON.stringify(checkBobas));
            setOrder(checkBobas);
          } 
          setOrderId(() => response.id);
        })
        .catch(error => console.error('Error:', error));
        
    }
  }

  const decrementBobaInOrder = (id, orderId, event) =>  {
    setBobaId(id)
    const checkBobas = JSON.parse(localStorage.getItem('cart'));
    let localBoba = checkBobas.find((boba) => boba.id === id);
    // localBoba = JSON.parse(localBoba);
    const findOrderIndex = localBoba.orders.findIndex((order) => order.id === orderId);
    console.log(orderId, findOrderIndex);
    if(localBoba.quantity === 1){
      handleRemoveBobaFromOrder(localBoba);
    } else {
      localBoba.quantity -= 1;
      localBoba.orders = localBoba.orders.filter((order) => order.id !== orderId);
      const localBobaIndex = checkBobas.findIndex((boba) => boba.id === id);
      checkBobas[localBobaIndex] = localBoba;
      localStorage.setItem('cart', JSON.stringify(checkBobas));
      setOrder(checkBobas);     
    }
  }

  
  function submitBobasInOrder(){
      //function to post boba_orders, using the id of the order we get back from the function
      order.forEach(boba => {
        fetch('/boba_orders', {
          method: 'POST',
          body: JSON.stringify({ 
            boba_id: boba.id,
            order_id: orderId,
            quantity: boba.quantity
          }),
          headers: { 'Content-Type': 'application/json' }
        })

      });
      alert('Your order has been submitted!');
      window.location.reload();
      localStorage.clear();
    }
  

    
    function handleRemoveBobaFromOrder(boba) {
      const updatedCart = order.filter((i) => i.id !== boba.id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setOrder([updatedCart]);
      window.location.reload();
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
      <NavBar user={user} setUser={setUser} order={order}/>
      <CoffeeBar />
      <main>
        {user ? (
          <Switch>
            <Route path="/bobas">
            <Bobas handleOrder={handleOrder} user={user}/>
            </Route>
            <Route exact path="/user">
              <User user={user}setUser={setUser} order= {order}/>
            </Route>
            <Route exect path="/order">
              <Order 
              onremoveBoba={handleRemoveBobaFromOrder} 
              order= {order} 
              submitBobasInOrder={submitBobasInOrder}
              handleOrder={handleOrder}
              decrementBobaInOrder={decrementBobaInOrder}
              orderId={orderId}
              
              />
            </Route>
          </Switch>
        ) : (
          <Switch> 
            <Route path="/bobas">
            <Bobas handleOrder={handleOrder} user={user}/>
            </Route>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            {/* <Route path="/">
              <Home />
            </Route> */}
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;