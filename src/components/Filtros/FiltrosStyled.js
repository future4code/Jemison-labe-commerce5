import styled from 'styled-components'

export const FiltrosContainer = styled.div `
    display: flex;
    align-items: center;
    width: 98%;
    height: 10vh;
    padding: 10px;
    margin: 15px;
    border-bottom: 2px solid rgb(15,10,99);

    input {
        width: 200px;
        border-radius: 5px;
        padding: 3px;
        margin: 5px;
    }

    .Preco{
        width: 115px;
    }
`

export const OrdenarContainer = styled.div `
    position: absolute;
    right: 15px;

    select{
        background-color: lightgray;
        padding: 5px;
        border-radius:10px;
        margin: 0 5px;
    }
`
