import React from 'react';
import OrderRender from './OrderRender.js'; 




  function Order({ onremoveBoba, order, submitBobasInOrder, handleOrder, decrementBobaInOrder, orderId}) {

    const orderList = order.map((or) => (
        <OrderRender key={or.id} or={or} onItemClick={onremoveBoba} handleOrder={handleOrder} decrementBobaInOrder={decrementBobaInOrder} orderId={orderId} renderOrder={or.orders} />
      ));

  

      const orderSum = order.map((or) => or.price * or.quantity)
      
      function sumArray(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];

        }
        return sum;
      }

      const sum = sumArray(orderSum);

    return (
        <div>
          <br />
          
          <h2>My Order</h2>
          {orderList}
          <button className="cart-button" id="green" onClick={submitBobasInOrder}>Submit Order!</button>
          <h3>Order sum : ${sum}</h3>

        </div>
      );


}
export default Order;