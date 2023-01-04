import React from 'react';
import BobaCard from './BobaCard';

function BobaRender({bobas, category, handleOrder, user}) {

    function filterByCategory(items, category) {
        return items.filter(item => item.category === category);
    }

    const filteredBobas = filterByCategory(bobas, category);

    const handleBobas = filteredBobas.map((boba) => (
     <BobaCard 
    key = {boba.id}
    id={boba.id}
    name={boba.name}
    price={boba.price}
    image={boba.image}
    handleOrder={handleOrder}
    user={user}
    category={boba.category}
    />
    ));

    return (
        <div className="boba-render">
        <h3>{category}</h3>
        <ul className="cards">{handleBobas}</ul>
        </div>
    );
}

export default BobaRender;