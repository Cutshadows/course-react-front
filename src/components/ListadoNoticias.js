import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';


const ListadoNoticias = ({news}) => {
    console.log(news);
    return ( 
        <div className="row">
            {
                news.map(noticia =>(
                    <Noticia 
                    key={noticia.url}
                    noticia={noticia}/>
                ))
            }
        </div>
     );
}
ListadoNoticias.propsTypes={
    news:PropTypes.array.isRequired
}
export default ListadoNoticias;