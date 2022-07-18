import React from 'react';
import {Sessao} from './FiltrosStyled.js';


function Filtros () {

    

    return (
        <Sessao>
            <h1>Busca avançada</h1>
            
            <form action="">
                <div>
                    <label>
                        Menor preço:
                        <input  type="number" value={''} onChange={''}/>
                    </label>
                </div>
                <div>
                    <label>
                        Maior preço:
                        <input type="number" value={''} onChange={''}/>
                    </label>
                </div>
                <div>
                    <label>
                        Buscar por nome:
                        <input type="text" value={''} onChange={''}/>
                    </label>
                </div>
                
                <button type="submit" onClick="submit">Filtrar</button>
            
            </form>


        </Sessao>
)}

export default Filtros;