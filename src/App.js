import React from 'react';
import './App.css';
import LProdutos from "./components/LProdutos";
import { produtos } from "./mockDados";


function App() {


  return (
    
    <div>

     

      <LProdutos myProdutos={produtos}/>
      ...
      ...
          

    </div>
  );
}

export default App;
