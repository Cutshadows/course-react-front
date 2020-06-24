import React from 'react';

const Imagen = ({imagen}) => {
    const {largeImageURL, likes, previewURL, tags, views }=imagen;
    return ( 
        <div className="col-12 cols-sm-6 col-md-4 col-lg-3">
                <div className="card">
                    <img 
                    src={previewURL} 
                    alt={tags} 
                    className="card-img-top"/>
                    <div className="card-body bg-0">
                        <p className="card-text info">{likes} Me Gusta</p>
                        <p className="card-text">{views} Vistas</p>
                    </div>
                    <div className="card-footer">
                            <a href={largeImageURL}
                            target="_black"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-block">Ver Imagen</a>
                    </div>  
                </div>
        </div>
     );
}
 
export default Imagen;