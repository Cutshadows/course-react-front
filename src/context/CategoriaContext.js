import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

//crear context dependiendo del proyecto a veces es bueno tener categoria en un lugar y context en otro

export const CategoriaContext=createContext();


//Provider es donde se encuentran las funciones y state
const  CategoriasProvider=(props)=>{
    //crear el state del context
    const [categorias, guardarCategorias]=useState([]);
    //ejecutar llamado de la api

    useEffect(()=>{
        const consultaAPI=async ()=>{
            const url=`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const categorias=await axios.get(url);
            guardarCategorias(categorias.data.drinks);
        }
        consultaAPI();
    }, [])
    return(
        <CategoriaContext.Provider
            value={{
                categorias                
            }}
        >
            {props.children}
        </CategoriaContext.Provider>
    )
}

export default CategoriasProvider;