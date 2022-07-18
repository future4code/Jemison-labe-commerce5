import React from 'react';
import {Sessao} from './FiltrosStyled.js';
import {produtos} from '../../mockDados'

function Filtros () {

    const MaiorValor = produtos.reduce(function(valor,index){
        return valor.value > index.value ? valor : index;
    })

    return (
        <Sessao>
            <h1>{MaiorValor}</h1>
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