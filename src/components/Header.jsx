import React from 'react';

const Header=(props)=>{
    const {numero}=props;
    const {titulo}=props;
    const edad=numero;
    let message=edad>=18?'Eres mayor de edad':'Eres menor de edad';
    return(
    <h1 className="encabezados">{titulo}</h1>
    
)}

export default Header;