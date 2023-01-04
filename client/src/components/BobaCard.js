import React, { useState } from "react";

function BobaCard({ id, name, price, image, handleOrder, user }) {
  // Declare a state variable called "isOpen" with an initial value of false
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <li className="card" onClick={() => setIsOpen(!isOpen)}>
        <img src={image} alt={name}></img>
        <p>{name}</p>
        <p>price: ${price}</p>
        {user ? (
          <button id="pink" onClick={(event) => handleOrder(id, event)}>
            ADD TO CART
          </button>
        ) : null}
      </li>
      {isOpen ?
                <div className="cardOpen" onClick={toggleIsOpen}>
                    <div>
                        <img id="cardOpen" src={image} alt={name}/>
                        <h1 id="name" >{name}</h1>
                        <div className="overflow-scroll">
                        <p>Price : {price}</p>
                        {user ? (
                        <button id="pinko" onClick={() => handleOrder(id)}>ADD TO CART</button>
                        
                        ) : null}
                        </div>
                    </div> 
				</div> : null}
    </div>
  );
}

export default BobaCard;