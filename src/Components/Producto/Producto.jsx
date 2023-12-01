import ProductoImagenes from '../ProductoImagenes/ProductoImagenes';
import ProductoInformacion from '../ProductoInformacion/ProductoInformacion';
import './Producto.css';


function Producto(props) {
    return(
        <div className="container">
            <ProductoImagenes/>
            <ProductoInformacion incrementarCompras={props.incrementarCompras}/>
        </div>
    );
}

export default Producto