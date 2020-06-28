import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext=createContext();

const RecetasProvider=(props)=>{

    const [recetas, guardarRecetas]=useState([]);
    const [busqueda, busquedaRecetas]=useState(
        {
            nombre:'',
            categoria:''
        }
    )
    const [consultar, guardarConsultar]=useState(false);
    const {nombre, categoria}=busqueda;

    useEffect(()=>{
        if(consultar){
            const obtenerReceta=async()=>{
                const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                const busquedaReceta=await axios.get(url);
                guardarRecetas(busquedaReceta.data.drinks);
            }
            obtenerReceta();
        }
    }, [busqueda]);
    return(
        <RecetasContext.Provider
        value={{
                recetas,
                busquedaRecetas,
                guardarConsultar
            }}>
            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider;