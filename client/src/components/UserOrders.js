import React, {useState, useEffect} from "react";
import UserOrderCard from "./UserOrderCard";

function UserOrders({order}) {
    const [bobaOrders, setBobaOrders] = useState([]);
    console.log(order);

    useEffect(() => {
        fetch('/boba_orders')
            .then((r) => r.json())
            .then(bobaOrders => setBobaOrders(bobaOrders))
    }, [])



    const handleBobasOrders = bobaOrders.map((bobaOrder) => (
        <UserOrderCard 
       key = {bobaOrder.id}
       id={bobaOrder.id}
       boba_id={bobaOrder.boba_id}
       order_id= {bobaOrder.order_id}
       quantity={bobaOrder.quantity}
       order={order}
       />
       ));



    return (
        <div className="boba-render">
        <h3>My Orders</h3>
        <ul className="cards">{handleBobasOrders}</ul>
        </div>
    )

};

export default UserOrders;