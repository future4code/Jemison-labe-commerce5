import React from 'react';
import {CardProduto} from './CardStyled.js'


export function Card (props) {
    return (
        <CardProduto>
            <img className="imagem" src={props.produto.imagemUrl} alt={props.produto.name}/>
            <h3>{props.produto.name}</h3>
            <p>R${props.produto.value},00</p>
            <button>Adicionar ao carrinho</button>
        </CardProduto>
    )
}
