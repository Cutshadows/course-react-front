import React, { useState, useEffect } from 'react';
import Button from '../pages/Button';
import '../assets/styles/App.scss';

import styled from '@emotion/styled';
import Frase from '../components/Frase';

const Contenedor=styled.div`
    display: flex;
    align-items:center;
    padding-top:5rem;
    flex-direction:column;
`;



const App=()=>{
    const [frase, guardarFrase]= useState({});
    

    return(
        <Contenedor>
            <Frase 
            frase={frase}/>
            <Button 
            guardarFrase={guardarFrase} />
        </Contenedor>
    )};

export default App;