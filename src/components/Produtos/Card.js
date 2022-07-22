import React from 'react';
import {CardProduto, CardButton} from './CardStyled.js'
import { useContext } from 'react';
import { CarrinhoContext } from '../Carrinho/carrinhoProvider.js';


export function Card (props) {
    const {setProdutoAtual} = useContext(CarrinhoContext)
    const adicionaProdutoNoCarrinho = () => {
        console.log(props, "props Card")
        console.log("produto adicionado no carrinho")
        setProdutoAtual(produtoAnterior => [...produtoAnterior, props.produto])
    }

    return (
        <CardProduto>
            <img className="imagem" src={props.produto.imagemUrl} alt={props.produto.name}/>
            <h3>{props.produto.name}</h3>
            <p>R${props.produto.value},00</p>
            <CardButton>
                <button onClick={adicionaProdutoNoCarrinho}>Adicionar ao carrinho</button>
            </CardButton>
        </CardProduto>
    )
}
