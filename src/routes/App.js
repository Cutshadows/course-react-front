import React, { Fragment, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Producto from '../components/Producto';
import Carrito from '../components/Carrito';

const App=()=>{
    //Crear listado de productos , un state y una function que ayude a reescribrir el state
    const [productos, setProducts ]=useState([
        { id:1, nombre: 'Camisa ReactJS', precio:50},
        { id:2, nombre: 'Camisa AngularJS', precio:40},
        { id:3, nombre: 'Camisa VueJS', precio:30},
        { id:4, nombre: 'Camisa EntityFramework', precio:20},
        { id:5, nombre: 'Camisa NodeJS', precio:10}
    ]);

    //State para un carrito de compras
    const [carrito, addProduct ]=useState([]);



    const fecha=new Date().getFullYear('YYYY');
    return(
    <Fragment>
         <Header titulo="Tienda Virtual" numero={18}/>
         <h1>Lista de Productos</h1>
         {productos.map(producto=>(
             <Producto 
             producto={producto} 
             key={producto.id}
             carrito={carrito}
             productos={productos}
             addProduct={addProduct}/>

         ))}

         <Carrito 
         carrito={carrito}
         addProduct={addProduct}/>
         <Footer
                fecha={fecha}/>   
    </Fragment>
)};

export default App;