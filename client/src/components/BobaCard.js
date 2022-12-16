import React from "react";

function BobaCard({id, name, price, image, handleOrder}) {
    return(
        <li className="card">
          <img src={image} alt={name} />
          <h4>{name}</h4>
          <p>{price}</p>
          <select >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button onClick={() => handleOrder(id)}>ADD TO CART</button>
          </li>
          );

}

export default BobaCard;