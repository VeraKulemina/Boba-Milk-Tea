import React, {useState, useEffect} from 'react';
import BobaRender from './BobaRender.js';
import Search from './Search.js';
// import Order from './Order.js'; 


function Bobas({handleOrder}) {
    const [bobas, setBobas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    // const [order, setOrder] = useState([]);


    useEffect(() => {
        fetch('/bobas')
            .then((r) => r.json())
            .then(bobas => setBobas(bobas))
    }, [])

    const searchBoba = bobas.filter((boba)  =>
    boba.name.toLowerCase().includes(searchTerm.toLowerCase())
      )

    //   function handleOrder(bobaAdd) {
    //     const bobaInOrder = order.find(
    //       (boba) => boba.id === bobaAdd.id
    //     );
    //     if (!bobaInOrder) {
    //       setOrder([...order, bobaAdd]);
    //     }
    //   }
    
    //   function handleRemoveBobaFromOrder(bobaRemove) {
    //     setOrder((order) =>
    //       order.filter((boba) => boba.id !== bobaRemove.id)
    //     );
    //   }

    
    
    return (
        <main>
            <div>
                <br />
                <h1 className="bobas">Boba Selection</h1>
                <Search setSearchTerm = {setSearchTerm} searchTerm = {searchTerm} />
                <BobaRender bobas={searchBoba} handleOrder={handleOrder}/>
                <br />
            </div>
        </main>
      )
}

export default Bobas;

