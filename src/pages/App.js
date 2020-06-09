import React, { Fragment, useState, useEffect } from 'react';
import '../assets/styles/App.scss';

import styled from '@emotion/styled';
import Header from 'component/Header';
import Formulario from 'component/Formulario';
import Clima from '../components/Clima';
import Error from '../components/Error';

const Contenedor=styled.div`
    display: flex;
    align-items:center;
    padding-top:5rem;
    flex-direction:column;
`;


const App=()=>{
    const [busqueda, guardarBusqueda] = useState({
        ciudad:'',
        pais:''
    });

    const [consultar, guardarConsultar]=useState(false);
    const [resultado, guardarResultado]=useState({});
    const [error, guardarError]=useState(false);

    const {ciudad, pais}=busqueda;

    useEffect(()=>{
        const apiWeather= async()=>{
            if(consultar){
                const appId='a095611e2a8efb798ceae04299b95371';
                const url=`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`; 
                const respuesta= await fetch(url);
                const resultado=await respuesta.json();
                guardarResultado(resultado);
                guardarConsultar(false);

                if(resultado.cod==="404"){
                    guardarError(true);
                }else{
                    guardarError(false);
                }
            }
            
        };
        apiWeather();
        //eslint-disable-next-line
    }, [consultar]);
    let component;

    if(error){
        component=<Error mensaje="No hay resultados" />;
    }else{
        component=<Clima resultado={resultado} />;
    }

    return(
        <Fragment>
            <Header 
                title='Clima React App'
            />
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <div className="col m6 s12">
                        <Formulario
                        busqueda={busqueda}
                        guardarBusqueda={guardarBusqueda}
                        guardarConsultar={guardarConsultar} />
                        </div>
                        <div className="col m6 s12">
                            {component}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )};

export default App;