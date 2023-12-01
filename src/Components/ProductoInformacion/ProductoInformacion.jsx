import Descripcion from '../Descripcion/Descripcion';
import './ProductoInformacion.css'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import ProductoComprar from '../ProductoComprar/ProductoComprar';
function ProductoInformacion(props){

    return(
        <div className='Info'>
            <h3 id='titulo-producto'>Consola Playstation 5 Ps5 Edición Estándar + Joystick Ps5 + Juego</h3>
            <h4 id='precio-producto'>$989.999</h4>
            <h5>en 12x $181.912</h5>
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
            <Descripcion/>
            <ProductoComprar incrementarCompras={props.incrementarCompras}/>
        </div>
    );
}
export default ProductoInformacion;