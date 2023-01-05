import React from 'react';
import IndividualOrder from './IndividualOrder.js';

function OrderRender({or, onItemClick, handleOrder, decrementBobaInOrder, renderOrder}) {
  const id = or.id;

  const orderList = renderOrder.map((order) => (
    <IndividualOrder 
    key={order.id} 
    id={order.id}
    comment={order.comment} 
    or={id}
    decrementBobaInOrder={decrementBobaInOrder}
    />
  ));

  
    function handleClick() {
        onItemClick(or);
      } 



    return(
      <div className="cart">
        <div className="cart-body">
        <img className="order_image" src={or.image} alt="img product"/>
          <h5 className="cart-title">{or.name}</h5>
          <p className="cart-text">Price: {or.price}</p>
          <p className="cart-text">Total: {or.quantity}</p>
          <button className="cart-title32" onClick={(event) => handleOrder(id, event)}>+</button>
          <br />
          {/* <button className="cart-title32" onClick={(event) => decrementBobaInOrder(id, event)}>-</button> */}
          {orderList}
          <br></br>
      <button className="cart-button" id="red" onClick={handleClick} >delete from the order</button>
        </div>
      </div>
  );
};

export default OrderRender;
