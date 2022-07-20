import styled  from 'styled-components';
import React from 'react';


const HeaderContainer = styled.header `
    display: flex;
    justify-content: center;
    align-items:center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    width: 100%;
    height: 100px;
    color: white;
    font-size: 1.5em;
    background-color: rgb(15,10,99)
`

export function Header () {
    return(

        <HeaderContainer>
            
            <h1>Brinquedos e Produtos infantis temáticos</h1>
            
        </HeaderContainer>
    )
}