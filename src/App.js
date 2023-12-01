import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero.jsx'
import Producto from './Components/Producto/Producto.jsx';


function App() {
  const [compras, setCompras] = React.useState(0)

  function incrementarCompras(){
    setCompras(compras+1)
  }

  return (
    <div className="App">
      <Header compras={compras}/>
      <Hero/>
      <Producto incrementarCompras={incrementarCompras}/>
    </div>
  );
}

export default App;
