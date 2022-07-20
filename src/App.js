import React, {useState} from 'react';
import './AppStyled.js';
import Filtros from './components/Filtros/Filtros.js'
import Produtos from './Produtos.json'
import {Card} from './components/Produtos/Card'
import {ProdutosContainer} from './components/Produtos/CardStyled'
import {Header} from './components/Header'
import {AppStyled} from  './AppStyled'
import './App.css'

function App() {

  const [produtos] = useState(Produtos)
  const [filtro, setFiltro] = useState('')

  return (

    <AppStyled>

      <Header/>
      
      <Filtros
        filtro={filtro}
        setFiltro={setFiltro}

      />

      <ProdutosContainer>
        {produtos
          .filter(produto =>{
            return produto.name.toLowerCase().includes(filtro.toLowerCase()) 
          })
          .map(produto => {
          return <Card key={produto.id} produto={produto} /> 
        })}
      </ProdutosContainer>
      
    </AppStyled>
  );
}

export default App;
