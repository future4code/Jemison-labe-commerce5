import styled from 'styled-components';

export const CarrinhoContainer = styled.div `
    display: flex;
    align-items: center;
    margin-left: 20px;
    width: 80px;
    height: 50px;
`

export const CarrinhoProdutos = styled.div `
    width: 400px;
    min-height: 30%;
    background-color: white;
    position: absolute;
    right: 25%;
    border-radius: 20px;
`

export const ProdutosNoCarrinho = styled.div `
    display: flex;
    justify-content: space-between ;
    li {
        display: inline;
        list-style:none;
        margin: 15px;
    }
`