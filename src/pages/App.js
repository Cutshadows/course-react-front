import React, { Fragment, useState, useEffect} from 'react';
import Formulario from 'component/Formulario';
import ListadoImagenes from '../components/ListadoImagenes';


//el hooks es unicamente una funcion, muchas veces cuando creas tu propio hook debe tener nuestro propio state
const App=()=>{
    const [busqueda, guardarBusqueda] = useState('');
    const [imagenes, guardarImagenes] = useState([]);
    const [paginaactual, guardarPaginaActual] = useState(1);
    const [totalpaginas, guardarTotalPaginas] = useState(1);

    useEffect(()=>{
        const consultarAPI=async ()=>{
            if(busqueda==='') return;
            const imagesxPagina=30;
            const key="17153546-f652282c541193918b7f6895a";
            const url=`https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagesxPagina}&page=${paginaactual}`;
            
            const respuestaPixabay=await fetch(url);
            const resultadoPixabay=await respuestaPixabay.json();

            guardarImagenes(resultadoPixabay.hits);
            console.log(resultadoPixabay);

            const calcularTotalPaginas=Math.ceil(resultadoPixabay.totalHits/imagesxPagina);
            guardarTotalPaginas(calcularTotalPaginas);

            const jumbotron=document.querySelector('.jumbotron');
            jumbotron.scrollIntoView({behavior:'smooth'});
        }
        consultarAPI();


    }, [busqueda, paginaactual]);

    const paginaAnterior=()=>{
        const nuevaPaginaActual=paginaactual-1;
        if(nuevaPaginaActual===0)return;
        guardarPaginaActual(nuevaPaginaActual);
    }
    const paginaSiguiente=()=>{
        const nuevaPaginaActual=paginaactual+1;
        if(nuevaPaginaActual>totalpaginas)return;
        guardarPaginaActual(nuevaPaginaActual);
    }
    return(
        <Fragment>
            <div className="container">
                <div className="jumbotron">
                    <p className="lead text-center">
                        Buscador de Imagenes
                    </p>
                    <Formulario 
                        guardarBusqueda={guardarBusqueda}/>
                </div>
                <div className="row justify-content-center">
                    <ListadoImagenes imagenes={imagenes}/>
                </div>
                {
                    (paginaactual===1)?
                    null:
                    (
                        <button 
                            type="button"
                            className="btn btn-info mr-1"
                            onClick={paginaAnterior}>
                                &laquo;Anterior
                        </button>
                    )
                }

                {
                    (paginaactual===totalpaginas)?
                    null:
                    (
                        <button 
                        type="button"
                        className="btn btn-info"
                        onClick={paginaSiguiente}>
                        Siguiente  &raquo;
                        </button>
                    )
                }
                
            </div>
        </Fragment>
    );    

};

export default App;