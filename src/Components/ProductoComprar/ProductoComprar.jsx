import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './ProductoComprar.css'


function ProductoComprar(props) {
  const [valor, setValor] = useState(false);

  function cambioValor() {
    if (valor === false) {
      setValor(true);
      props.incrementarCompras();
    } else {
      setValor(false);
    }
  }
  console.log(valor);

  return (
    <>
      <Button variant="primary" onClick={cambioValor}>
        Comprar
      </Button>
      <p className='gracias'>{valor ? 'Gracias por su compra!!!':''}</p>
    </>
  );
}

export default ProductoComprar;