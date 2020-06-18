import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import useMoneda from 'hook/useMoneda'; 
import useCriptoMoneda from 'hook/useCriptoMoneda';
import axios from 'axios'; 
import Error from './Error';
const Buttom= styled.input`
    margin-top:20px;
    font-weight:bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border:none;
    width:100%;
    border-radius:10px;
    color: #FFF;
    transition: background-color .3s ease;  
    &::hover{
        background-color:#326AC0;
        cursor:pointer;
    }
`;

const Formulario = ({guardarMoneda, guardarCriptoMoneda}) => {
    //state del listado de criptomonedas

    const [listacripto, saveCriptomonedas]=useState([]);
    const [error, guardarError]=useState(false);

    const MONEDAS =[
        {codigo: 'USD', nombre:'Dolar de Estados Unidos'},
        {codigo: 'CL', nombre:'Pesos Chilenos'},
        {codigo: 'MXN', nombre:'Peso Mexicano'},
        {codigo: 'EUR', nombre:'EURO '},
        {codigo: 'GBP', nombre:'Libra Esterlina'},
    ];
    
    
    //use moneda custom hooks
    
    const [
        moneda, 
        SelectMonedas]=useMoneda('Elige tu moneda', '', MONEDAS ); 
    
    // use cripto moneda hook    
    const [
        criptomoneda, 
        SelectCripto]=useCriptoMoneda('Elige tu criptomoneda', '', listacripto);

    //Ejecutar llamada a la api
    useEffect(()=>{
      const consultarAPI= async ()=>{
            const url=`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const result= await axios.get(url);

            saveCriptomonedas(result.data.Data);
        }
        consultarAPI(); 
    }, []);

    const cotizarMoneda=e=>{
        e.preventDefault();

        //validar moneda
        if(moneda==='' || criptomoneda===''){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptoMoneda(criptomoneda);
    }
    return ( 
        <form 
            onSubmit={cotizarMoneda}>
            { error? 
                <Error mensaje='Todos los campos son obligatorios'/>
                : null
            }
            <SelectMonedas />
            <SelectCripto />
            <Buttom
                type="submit"
                value="Calcular" />
        </form>

     );
}
 
export default Formulario;