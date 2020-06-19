import React from 'react';
import 'style/Formulario.module.scss';
import useSelect from 'hook/useSelect';
import PropTypes from 'prop-types';



const Formulario = ({saveCategory}) => {
    const OPCTIONS=[
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertaiment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'}
    ]
    //custom hooks
    const [categoria, SelectNoticias]=useSelect('general', OPCTIONS);


    //submit al form, pasar categoria a app
    const buscarNoticias=e=>{
        e.preventDefault();
        saveCategory(categoria);
    }

    return ( 
        <div className="row">
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}>
                    <h2 className="heading">Encuentra Noticias por categoría</h2>

                    <div className="input-field col s12">
                        <SelectNoticias />
                        <input 
                            className="btn_block btn-large amber darken-2" /* `${styles.btn_block}` */
                            value="Buscar"
                            type="submit"/>
                    
                    </div>
                </form>
            </div>
        </div>

     );
}
Formulario.propTypes={
    saveCategory:PropTypes.func.isRequired
}
export default Formulario;