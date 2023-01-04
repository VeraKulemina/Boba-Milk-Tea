import React from "react";

function UserOrderCard({id, boba_id, order_id, quantity, order}) {
    const name = order.map((or) => or.name);
    return (
        <div>
      <li className="card">
        <p>{order_id}</p>
        <p>{boba_id}</p>
      </li>
    </div>
    )

};

export default UserOrderCard;