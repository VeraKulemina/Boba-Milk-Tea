import React from 'react';
import OrderRender from './OrderRender.js'; 



function Order ({onremoveBOba, order}) {

    console.log(order)
    const orderList = order.map((or) => (
        <OrderRender key={or.id} or={or} onItemClick={onremoveBOba} />
      ));


    return (
        <div>
          <h2>My Order</h2>
          {orderList}
        </div>
      );


}
export default Order;