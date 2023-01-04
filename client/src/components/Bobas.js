import React, {useState, useEffect} from 'react';
import BobaRender from './BobaRender.js';
import Search from './Search.js';
// import Order from './Order.js'; 


function Bobas({handleOrder, user}) {
    const [bobas, setBobas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        fetch('/bobas')
        .then((r) => r.json())
        .then(bobas => setBobas(bobas))
    }, []);

    const searchBoba = bobas.filter((boba)  =>
    boba.name.toLowerCase().includes(searchTerm.toLowerCase())
      )


    
    
    return (
        <main>
            <div>
                <br />
                <h1 className="bobas">Boba Selection</h1>
                <Search setSearchTerm = {setSearchTerm} searchTerm = {searchTerm} />
                <BobaRender category={"Specialty"} bobas={searchBoba} handleOrder={handleOrder} user={user}/>
                <BobaRender category={"Matcha & Hojicha"} bobas={searchBoba} handleOrder={handleOrder} user={user}/>
                <BobaRender category={"Seasonal Specials"} bobas={searchBoba} handleOrder={handleOrder} user={user}/>
                <BobaRender category={"Fruit Frescas"} bobas={searchBoba} handleOrder={handleOrder} user={user}/>

                <br />
            </div>
        </main>
      )
}

export default Bobas;

