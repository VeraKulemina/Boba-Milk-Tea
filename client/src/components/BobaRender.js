import React from 'react';
import BobaCard from './BobaCard';

function BobaRender({bobas, handleOrder}) {
    const handleBobas = bobas.map((boba) => (
     <BobaCard 
    key = {boba.id}
    id={boba.id}
    name={boba.name}
    price={boba.price}
    image={boba.image}
    handleOrder={handleOrder}
    />
    ))
    
    return (
        <>
        <ul className="cards">{handleBobas}</ul>
        </>
    );
}

export default BobaRender;