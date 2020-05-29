import React, { Fragment, useState } from 'react';
import Principal from 'pages/Principal';
import Header from 'pages/Header';

const App=()=>{
    return(
    <Fragment>
        <Header titulo='Cotizador de Seguros'/>
        <Principal />
    </Fragment>
)};

export default App;