import React, {useState} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from '../components/Error';


const Formulario = ({guardarGasto, guardarCrearGasto}) => {
    const [nombre, guardarNombre]=useState('');
    const [cantidad, guardarCantidad]=useState(0);
    const [error, guardarError]=useState(false);

    //agregar gasto
    const agregarGasto=e=>{
        e.preventDefault();

        //validar
        if(cantidad<1 || isNaN(cantidad) || nombre.trim()===''){
            guardarError(true);
            return;
        }
        guardarError(false);
        //construir el gasto
        const gasto={
            nombre,
            cantidad,
            id:shortid.generate()
        }
        //pasar el gasto al comp principal
        guardarGasto(gasto);
        guardarCrearGasto(true);
        //resetear el form

        guardarNombre('');
        guardarCantidad(0);


    }
    return ( 
        <form
        onSubmit={agregarGasto}>
            <h2> Agregar tus gastos aquí</h2>
            {error? <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrector"/>:null}
            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e=>guardarNombre(e.target.value)}/>
            </div>

            <div className="campo">
                <label htmlFor="">Cantidad Gasto</label>
                <input type="text"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e=>guardarCantidad(parseInt(e.target.value, 10))}/>
            </div>
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"/>
        </form>
     );
}
 
Formulario.propTypes={
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;