import React, {Fragment, useState} from 'react';
//import * as uuid from 'uuid';
import {v1 as uuid} from 'uuid';


const Formulario = ({crearCita}) => {
//crear citas
const [cita, actualizarCita]=useState({
   mascota:'',
   propietario:'',
   fecha:'',
   hora:'',
   sintomas:''
});

const [error, actualizarError]=useState(false);

const handleChange=e=>{
    console.log(e.target.name);
    actualizarCita({
       ...cita,
       [e.target.name]:e.target.value
    })
}
const submitCita=e=>{
   e.preventDefault(); //ya no envia a con query string

   //validar
   if(mascota.trim()==='' || propietario.trim()==='' || fecha.trim()==='' || hora.trim()==='' || sintomas.trim()===''){
     actualizarError(true);
     return;//corta la ejecucion para que no pase de aca
   }
  //eliminar mensaje error
  actualizarError(false);

   //asignar un ID
   cita.id=uuid();

   //crear la cita
   crearCita(cita);

   //reiniciar el form
   actualizarCita({
      mascota:'',
      propietario:'',
      fecha:'',
      hora:'',
      sintomas:''
   })
}
//Extraer los valores

const {mascota, propietario, fecha, hora, sintomas}=cita;

    return ( 
		<Fragment>
      <h1> Crear citas</h1>
      {error?<p className="alerta-error"> Todos los campos son requeridos</p>:null}
      <form
      onSubmit={submitCita}>
         <label htmlFor="mascota">Nombre Mascotas</label>
         <input  
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Nombre Mascota"
            onChange={handleChange}
            value={mascota}
         />

         <label htmlFor="propietario">Nombre Dueño</label>
         <input 
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre Dueño"
            onChange={handleChange}
            value={propietario}

         />

         <label htmlFor="fecha">Fecha</label>
         <input 
            type="date"
            name="fecha"
            className="u-full-width"
            onChange={handleChange}
            value={fecha}
         />

         <label htmlFor="hora">Hora</label>
         <input 
            type="time"
            name="hora"
            className="u-full-width"
            onChange={handleChange}
            value={hora}

         />

          <label htmlFor="sintomas">Sintomas</label>
         <textarea
         name="sintomas"
         className="u-full-width"
         onChange={handleChange}
         value={sintomas}
         >
         </textarea>

         <button
         type="submit"
         className="u-full-width button-primary"
         >Agregar Citas</button>

      </form>
		</Fragment>
     );
}
 
export default Formulario;