import ProductoImagenes from '../ProductoImagenes/ProductoImagenes';
import ProductoInformacion from '../ProductoInformacion/ProductoInformacion';
import './Producto.css';


function Producto() {
    return(
        <div className="container">
            <ProductoImagenes/>
            <ProductoInformacion/>
        </div>
    );
}

export default Producto