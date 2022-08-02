import React from "react"
import {useState, createContext} from "react"

export const CarrinhoContext = createContext([])


const CarrinhoProvider = ({children}) => {
  const [produtoAtual, setProdutoAtual] = useState([])

  return(
    <CarrinhoContext.Provider  value={{
      produtoAtual, setProdutoAtual
    }}>
      {children}
    </CarrinhoContext.Provider>
  
  )
}

export default CarrinhoProvider;