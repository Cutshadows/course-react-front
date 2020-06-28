import React,{createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const ModalContext=createContext();

const ModalProvider=(props)=>{

    //state del provider

    const [idreceta, guardarIdReceta]=useState(null);
    const [informacion, guardarReceta]=useState({});

    //una vez teniendo la receta llamar nuevamente a la api

    useEffect(()=>{
            const obtnerReceta=async()=>{
                if(!idreceta)return;
                const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
                const consultaReceta= await axios.get(url);
                guardarReceta(consultaReceta.data.drinks[0]);
        }
        obtnerReceta();
    }, [idreceta])

    return(
        <ModalContext.Provider
        value={{
            informacion,
            guardarIdReceta,
            guardarReceta
        }}>
        {props.children}
        </ModalContext.Provider>

    );
}

export default ModalProvider;