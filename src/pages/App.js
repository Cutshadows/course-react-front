import React, { useState, useEffect } from 'react';
import 'style/App.scss';
import styled from '@emotion/styled';
import criptoImagen from 'img/cryptomonedas.png';
import Formulario from 'component/Formulario';
import Cotizacion from 'component/Cotizacion';
import axios from 'axios';
import Spinner from '../components/Spinner';

const Contenedor=styled.div`
    max-width:900px;
    margin: 0 auto;
    @media(min-width:992px){
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap:2rem;
    }
`;
const Heading = styled.h1`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-align:left;
    font-weight: 700;
    font-size: 50px;
    margin-bottom:50px;
    margin-top:80px;

    &::after{
        content:'';
        width:100px;
        height:6px;
        background-color: #66A2FE;
        display:block;
    }
`;
const Imagen=styled.img`
    max-width:100%;
    margin-top:5rem;
`;
//el hooks es unicamente una funcion, muchas veces cuando creas tu propio hook debe tener nuestro propio state
const App=()=>{
    const [moneda, guardarMoneda]=useState('');
    const [criptomoneda, guardarCriptoMoneda]=useState('');
    const [result, saveResult]=useState({});
    const [loading, saveLoad]=useState(false);

    useEffect(()=>{
        const cotizarCriptoMoneda= async()=>{
            if(moneda ==='')return;
            const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
            const result= await axios.get(url);
            saveLoad(true);

            setTimeout(()=>{
                saveLoad(false);
                saveResult(result.data.DISPLAY[criptomoneda][moneda]);
            }, 3000);

        }
        cotizarCriptoMoneda();
       
    }, [moneda, criptomoneda]);


    //mostrar spinner o resultado

    const componente=(loading)?<Spinner/>: <Cotizacion result={result} />; 
    return(
        <Contenedor>
             <div>
                <Imagen
                    src={criptoImagen}
                    alt="Imagen cripto"
                    />
             </div>
             <div>
                <Heading >Cotiza Criptomonedas al instante</Heading>
                <Formulario
                guardarMoneda={guardarMoneda}
                guardarCriptoMoneda={guardarCriptoMoneda}
                 />
                {componente}
             </div>
        </Contenedor>
    )};

export default App;