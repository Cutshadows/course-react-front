import React, { Fragment, useState, useEffect } from 'react';
import 'style/App.scss';
import Header from 'component/Header';
import Formulario from '../components/Formulario';
import ListadoNoticias from '../components/ListadoNoticias';


//el hooks es unicamente una funcion, muchas veces cuando creas tu propio hook debe tener nuestro propio state
const App=()=>{
    //definir ctegoria
    const [category, saveCategory]=useState('');
    const [news, saveNews]=useState([]);
    useEffect(()=>{
        const consultarAPI=async()=>{
            const url=`https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=22a78bfdcb744abcb8403263f48a17ca`;
            const respuesta=await fetch(url);
            const noticias= await respuesta.json();

            saveNews(noticias.articles);
        }
        consultarAPI();
    }, [category])
        return(
        <Fragment >
             <Header 
             titulo="Buscador de Noticias"/>
            <div className="container white">
               <Formulario 
               saveCategory={saveCategory}/>
               <ListadoNoticias news={news} />
            </div>

        </Fragment>
    )};

export default App;