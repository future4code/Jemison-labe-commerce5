import React, { useState } from 'react';
import './AppStyled.js';
import Filtros from './components/Filtros/Filtros.js'
import Produtos from './Produtos.json'
import { Card } from './components/Produtos/Card'
import { ProdutosContainer } from './components/Produtos/CardStyled'
import { Header } from './components/Header'
import { AppStyled } from './AppStyled'
import CarrinhoProvider from './components/Carrinho/carrinhoProvider.js';
import './App.css'


function App() {

  const [produtos] = useState(Produtos)
  const [filtro, setFiltro] = useState('')
  const [precoMinimo, setPrecoMinimo] = useState(-Infinity)
  const [precoMaximo, setPrecoMaximo] = useState(Infinity)
  const [ordenar, setOrdenar] = useState("name")
  const lowerBusca = filtro.toLowerCase()

  return (


    <AppStyled>
      <CarrinhoProvider>
        <Header />

        <Filtros
          filtro={filtro}
          setFiltro={setFiltro}

          precoMinimo={precoMinimo}
          setPrecoMinimo={setPrecoMinimo}

          precoMaximo={precoMaximo}
          setPrecoMaximo={setPrecoMaximo}

          ordenar={ordenar}
          setOrdenar={setOrdenar}>
          
        </Filtros>

        <ProdutosContainer>
          {produtos
            .filter(produto => {
              return produto.name.toLowerCase().includes(lowerBusca)
            })
            .filter(produto => {
              return produto.value >= precoMinimo || precoMinimo === ""
            })
            .filter(produto => {
              return produto.value <= precoMaximo || precoMaximo === ""
            })
            .sort((produtoAtual, proximoProduto) => {
              switch (ordenar) {
                case "value":
                  return produtoAtual.value - proximoProduto.value
                case "name":
                  return produtoAtual.name.localeCompare(proximoProduto.name)
                default:
                  return produtoAtual.name
              }
            })
            .map(produto => {
              return <Card key={produto.id} produto={produto} />
            })}

        </ProdutosContainer>
      </CarrinhoProvider> 
    </AppStyled>
  );
}

export default App;
