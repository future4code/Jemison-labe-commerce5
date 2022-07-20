import React from 'react';
import {FiltrosContainer} from './FiltrosStyled.js';


function Filtros (props) {

    

    return (
        <FiltrosContainer>
            <h3>Buscar:</h3>
            
              
            <input
                type="text"
                placeholder='Pesquisar'
                value={props.filtro} 
                onChange={(ev) => {props.setFiltro(ev.target.value)}}
            />
        
            
            {/* <input type="number" value={''} onChange={''}/>
        
    
            
            <input type="text" value={''} onChange={''}/> */}
        

        </FiltrosContainer>
)}

export default Filtros;