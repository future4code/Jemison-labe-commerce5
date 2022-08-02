import React, {useState} from 'react';
import * as S from './CarrinhoStyle'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import { CarrinhoContext } from './carrinhoProvider';




export const Carrinho = (props) => {

    const {produtoAtual} = useContext(CarrinhoContext)
    const [clicarCarrinho, setClicarCarrinho] = useState(false)
    const [quantidade, setQuantidade] = useState(1)

    
    const Clique = () => {
        setClicarCarrinho(!clicarCarrinho)
        
    }

    const QuantidadeDeProdutos = () =>{
        setQuantidade(quantidade+1)
    }
    

    return (
        <S.CarrinhoContainer >
           <FontAwesomeIcon icon={faCartShopping}  onClick={Clique}/>
           {
            clicarCarrinho ? <S.CarrinhoProdutos>{produtoAtual.map((lista, key) =>{return (<S.ProdutosNoCarrinho key={key}>
                <ol>
                    <li>{quantidade}x</li>
                    <li>{lista.name}</li> 
                    <button onClick={QuantidadeDeProdutos}>Adicionar</button>
                </ol>
            </S.ProdutosNoCarrinho>)
        })}</S.CarrinhoProdutos> : null
           }
           
        </S.CarrinhoContainer>
    )
}