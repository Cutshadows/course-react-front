import React from 'react';
import Formulario from 'component/Formulario';
import Header from '../components/Header';
import ListaRecetas from '../components/ListaRecetas';


import CategoriaProvider from '../context/CategoriaContext'; 
import RecetasProvider from '../context/RecetasContext'; 
import ModalProvider from '../context/ModalContext';


//el hooks es unicamente una funcion, muchas veces cuando creas tu propio hook debe tener nuestro propio state
const App=()=>{
     return(
         <CategoriaProvider>
            <RecetasProvider>
                <Header />

                <div className="container mt-5">
                    <div className="row">
                        <Formulario />
                    </div>
                    <ModalProvider>
                         <ListaRecetas />
                    </ModalProvider>
                </div>
             </RecetasProvider>
         </CategoriaProvider>
    );    

};

export default App;