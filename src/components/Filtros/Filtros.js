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
        
            
            <input
                className="Preco"
                type="number" 
                placeholder='Preço mínimo'
                value={props.precoMinimo} 
                onChange={(ev) => {props.setPrecoMinimo(ev.target.value)}}
            />
        
    
            
            <input 
                type="number"
                placeholder='Preço máximo' 
                value={props.precoMaximo} 
                onChange={(ev) => {props.setPrecoMaximo(ev.target.value)}}
            />
        

        </FiltrosContainer>
)}

export default Filtros;