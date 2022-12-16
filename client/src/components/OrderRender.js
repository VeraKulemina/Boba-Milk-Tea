import React from 'react';

function OrderRender({or, onItemClick}) {

    function handleClick() {
        onItemClick(or);
      } 

    return(
        <div >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{or.name}</h5>
          <p className="card-text">{or.price}</p>
          <image>{or.image}</image>
          <button onClick={handleClick}>delete from the order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderRender
