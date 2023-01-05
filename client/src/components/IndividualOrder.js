import React, {useState} from 'react';

function IndividualOrder ({id, comment, or, decrementBobaInOrder}) {
    const [orderComment, setComment] = useState("100%");
    
    const handleInputChange = (e) => {
        setComment(e.target.value);

    };

 
    const updateOrder = (e) => {
    e.preventDefault();
    fetch(`./orders/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment: orderComment
        }),
      })
        .then((r) => r.json())
        .then((result) => {
            const checkBobas = JSON.parse(localStorage.getItem('cart'));
            let localBoba = checkBobas.find((boba) => boba.id === or);
            
            if (localBoba != null) {
                const localBobaIndex = checkBobas.findIndex((boba) => boba.id === or);
                const orderIndex = localBoba.orders.findIndex((order) => order.id === id);
                localBoba.orders[orderIndex].comment = orderComment;
                checkBobas[localBobaIndex] = localBoba;
                localStorage.setItem('cart', JSON.stringify(checkBobas));
            }
            console.log(localBoba);
            setComment(result)
            window.location.reload();
        })
        
        .catch(error => console.error('Error:', error));
        

       
    }



    return (
        <>
        <br></br>
        <div id="card123" >
            <div>Desired sugar level: {comment}</div>
                <select id="sugar-level-select"  onChange={handleInputChange}>
                    <option value={orderComment}>select</option>
                    <option value="75%">75%</option>
                    <option value="50%">50%</option>
                    <option value="25%">25%</option>
                </select>
                <button  className="cart-title32" onClick={(event) => decrementBobaInOrder(or, id, event)}>                   
                </button>
                <br />
                <br />
                <button  className="cart-title321" onClick={updateOrder}>sugar level</button>

        </div>
        </>
    );

}
export default IndividualOrder;