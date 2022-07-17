import React from 'react';
import {Sessao} from './FiltrosStyled.js';

function Filtros () {

    return (
        <Sessao>
            
            <h1>Filtros</h1>
            
            <div>
                <label>
                    Valor Minímo:
                    <input />
                </label>
            </div>

            <div>
                <label>
                    Valor Máximo:
                    <input />
                </label>
            </div>

            <div>

                <label>
                    Busca por nome:
                    <input />
                </label>

            </div>


        </Sessao>
)}

export default Filtros;