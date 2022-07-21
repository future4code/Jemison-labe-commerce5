import styled from 'styled-components';

export const ProdutosContainer = styled.div `
    display: flex;
    flex-wrap: wrap ;
    justify-content: center;
    align-items: center ;
    width: 100% ;
    height: 100% ;

`
export const CardButton = styled.div`
    margin-top: 10px;
  




`


export const CardProduto = styled.div `
    display: flex;
    flex-direction:column;
    align-items: center;
    width:  250px;
    padding: 10px;
    margin: 10px 10px;
    border-radius: 10px ;
    background-color: lightblue;

    .imagem{
        width: 80%;
        height: 80%;
        border: 1px solid grey;
    }
`