import React, {useContext, useState} from 'react';
import Error from './Error';
import { CategoriaContext } from '../context/CategoriaContext';
import { RecetasContext } from '../context/RecetasContext';


const Formulario = () => {
    const [busqueda, guardarBusqueda]=useState({
        nombre:'',
        categoria:''
    });

    const {categorias}=useContext(CategoriaContext);
    const {busquedaRecetas, guardarConsultar}=useContext(RecetasContext);

    //funcion para leer los contenidos

    const obtenerDatosRecetas=e=>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }
    return ( 
        <form 
            onSubmit={e=>{
                e.preventDefault();
                busquedaRecetas(busqueda);
                guardarConsultar(true);
            }}
            className="col-12">
            <fieldset className="text-center">
                <legend>Busca bebida por Categoría</legend>
            </fieldset>
            <div className="row">
                <div className="col-md-4">
                    <input 
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Buscar por ingrediente"
                        onChange={obtenerDatosRecetas}/>
                </div>
                <div className="col-md-4">
                    <select 
                        name="categoria" 
                        className="form-control"
                        onChange={obtenerDatosRecetas}
                    >
                    <option value="">---- Selecciona Categoría ----</option>
                    {categorias.map(categoria=>(
                        <option 
                        key={categoria.strCategory} 
                        value={categoria.strCategory} >{categoria.strCategory}</option>
                    ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                    type="submit" 
                    className="btn btn-block btn-primary"
                    value="Buscar Recetas"/>
                </div>
            </div>
        </form>

     );
}
export default Formulario;