import React from 'react';
import { Carrinho } from '../Carrinho/Carrinho.js';
import {FiltrosContainer, OrdenarContainer} from './FiltrosStyled.js';


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
                className="Preco"
                type="number"
                placeholder='Preço máximo' 
                value={props.precoMaximo} 
                onChange={(ev) => {props.setPrecoMaximo(ev.target.value)}}
            />
            <Carrinho />
            <OrdenarContainer>
                <label for="ordenar">
                    Ordenar por:
                    <select
                        name="ordenar"
                        value={props.ordenar}
                        onChange={(ev) =>{props.setOrdenar(ev.target.value)}}
                    >
                        <option value={"name"}>Nome</option>
                        <option value={"value"}>Preço</option>
                    </select>
                </label>
            </OrdenarContainer>

        </FiltrosContainer>
)}

export default Filtros;