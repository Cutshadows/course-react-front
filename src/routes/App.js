import React, { Fragment, useState } from 'react';
import Header from 'pages/Header';
import Formulario from 'pages/Formulario';
import Resumen from 'components/Resumen';
import '../assets/styles/App.scss';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import Resultado from '../components/Resultado';
import Spinner from '../components/Spinner';

const Contenedor=styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const ContenedorFormulario=styled.div`
    background-color: #FFF;
    padding: 3rem;
`;


const App=()=>{
const [resumen, guardarResumen]=useState({
    cotizacion:0,
    datos:{
        modelo:'',
        year:'',
        plan:''
    }
});

const [cargando, guardarCargando]=useState(false);


const {cotizacion, datos}=resumen;

    return(
    <Fragment>
        <Contenedor>
            <Header 
                titulo='Cotizador de Seguros'/>
            <ContenedorFormulario>
                <Formulario 
                    guardarResumen={guardarResumen}
                    guardarCargando={guardarCargando}
                />
                {cargando?<Spinner />:null}
                
                <Resumen 
                    datos={datos}
                />
                {   !cargando?
                        <Resultado 
                        cotizacion={cotizacion}
                        />
                    :null
                }
                
            </ContenedorFormulario>
        </Contenedor>
        
    </Fragment>
)};

Formulario.propTypes={
    guardarCargando:PropTypes.func.isRequired,
    guardarResumen: PropTypes.func.isRequired
}


export default App;