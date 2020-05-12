import React from 'react';

const Producto = ({producto, carrito, addProduct, productos}) => {
    const {nombre, precio, id}=producto;
    //agregar producto al carrito
    const selectProduct=id=>{
        const producto=productos.filter(producto=>producto.id===id)[0];
        console.log(producto);
        addProduct([
            ...carrito, 
            producto
        ]);
    }
	//Delete product
	const deleteProduct=id=>{
		const productos=carrito.filter(producto=>producto.id !== id);
		addProduct(productos);
	}
    return ( 
        <div>
        <h2>{nombre}</h2>
        <p>${precio}</p>
       
        {productos?
         (<button 
            type="button"
            onClick={()=>selectProduct(id)}>
                Comprar
         </button>)
        :(
		<button 
            type="button"
            onClick={()=>deleteProduct(id)}>
                Eliminar
         </button>
		)}
        </div> 
        );
}
 
export default Producto;