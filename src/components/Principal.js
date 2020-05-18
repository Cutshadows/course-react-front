import React, {useState, useEffect} from 'react';
import '../assets/styles/App.scss';
import Formulario from "./Formulario";
import Cita from './Cita';
import PropTypes from 'prop-types';

const Principal = () => {

    //citas en localstorage
    let citasIniciales=JSON.parse(localStorage.getItem('citas'));
    if(!citasIniciales){
        citasIniciales=[];
    }

    const [citas, guardarCitas] = useState(citasIniciales);



    //Use Effect para realizar ciertas operaciones cuando el state cambia document.ready doc content loeader similar  versiones anteriores de react componentDidMount componentDidUpdate
    useEffect(()=>{
        let citasIniciales=JSON.parse(localStorage.getItem('citas')); //se re declara citas iniciales o abajo en el arrelo son las dos formas de declarar nuevamente
        if(citasIniciales){
            localStorage.setItem('citas', JSON.stringify(citas))
        }else{
            localStorage.setItem('citas', JSON.stringify([]));
        }
    }, [citas]); //arreglo con dependencias

    //function que modifique
      const crearCita=cita=>{
          guardarCitas([
              ...citas,
              cita
          ])
      }
    //function delete cita 
    const eliminarCita=id=>{
        const nuevasCitas=citas.filter(cita=>cita.id!=id);
        guardarCitas(nuevasCitas);
    }

    // mensaje personalizado de citas
    const titulo=citas.length===0? 'No hay citas': 'Administra tus citas';
    return ( 
         <div className="container">
         <h1>Lista de Productos</h1>
		     <div className="row">
             <div className="one-half column">
                <Formulario
                crearCita={crearCita}/>
             </div>
            <div className="one-half column">
             <h2>{titulo}</h2>
                {citas.map(cita=>(
                    <Cita 
                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita}
                    />
                ))}
             </div>
		     </div>
         </div>
     );
}
 
Formulario.propTypes={
    crearCita: PropTypes.func.isRequired //es una forma de hacer typechecking o documentar tu componente
}
export default Principal;