import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';


const Label=styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform:uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top:2rem;
    display:block;
`;

const Select = styled.select`
    width: 100%;
    padding:1rem;
    display:block;
    -webkit-appearance:none;
    border-radius: 10px;
    border:none;
`;

const Option=styled.option`
    font-size:1.2rem;
    background-color: #326AC0;
    transition: background-color .3s ease;  
    &::hover{
        background-color: #8db9fc;
        cursor:pointer;
    }
`;
const useCriptoMoneda=(label, stateInicial, opciones)=>{
    //aca va a ser el manejo del state
    const [state, actualizarState]= useState(stateInicial);
    const {CoinInfo}= opciones;
    const SelectCripto =()=>(
        //esto se va a mostrar en pantalla
        <Fragment>
            <Label htmlFor="select">{label}</Label>
            <Select 
                name="select"
                id="select"
                onChange={e=>actualizarState(e.target.value)}
                value={state}>
                <Option value="">-- Seleccione --</Option>
                {
                    opciones.map(opcion=>(
                        <Option 
                            key={opcion.CoinInfo.Id} 
                            value={opcion.CoinInfo.Name}>
                                {opcion.CoinInfo.FullName }
                        </Option>
                    )) 
                }
                </Select>
        </Fragment>
    );

    // Retornar state, interfaz y fn que modifica el state
    return [state, SelectCripto, actualizarState];
}

export default useCriptoMoneda;
