import React from 'react';
import '../assets/styles/carrito.scss';
import Producto from './Producto';

const Carrito = ({carrito, addProduct}) => (
    <div className="carrito">
        <h2> Tu Carrito de compras</h2>
        {carrito.length===0?
        <p>No hay elementos en el carrito</p>
        :
        carrito.map(producto=>(
            <Producto 
                key={producto.id}
                producto={producto}
                carrito={carrito}
                addProduct={addProduct}/>
        ))}
    </div>
);
 
export default Carrito;