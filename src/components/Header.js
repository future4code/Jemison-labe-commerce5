import styled  from 'styled-components';
import React from 'react';


const HeaderContainer = styled.header `
    display: flex;
    justify-content: center;
    align-items:center;
    font-family: 'Henny Penny', cursive;
    text-align: center;
    width: 100%;
    height: 180px;
    color: white;
    font-size: 2em;
    background-image: url(https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1493&q=80);
//    background-color: rgb(15,10,99)
`

export function Header () {
    return(

        <HeaderContainer>
            
            <h1>Brinquedos e Produtos Infantis</h1>
                        
        </HeaderContainer>
    )
}