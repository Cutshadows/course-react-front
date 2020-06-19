import React, {useState} from 'react';

const useSelect = (stateInicial, opciones) => {
    console.log(opciones);
    const [state, actualizarState]=useState(stateInicial);
        
    const SelectNoticias=()=>(
        <select
            className="browser-default"
            value={state}
            onChange={e=>actualizarState(e.target.value)}
        >
            { opciones.map(opction=>(
                <option 
                    key={opction.value} 
                    value={opction.value}>
                    {opction.label.toUpperCase()}
                </option>)
            )}    

        </select>
    );
    return [state, SelectNoticias];
}
 
export default useSelect;