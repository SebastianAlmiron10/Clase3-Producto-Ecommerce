import React, { useState } from 'react';
import './ProductoImagenes.css';
import ImgPrincipal from './img-producto/image_1024.png';
import ImgScundarial from './img-producto/sony-playstation-5-825-gb-wifi-negro-blanco.jpg';
import Img3 from './img-producto/6130-011-61438084e79e2ab67716832236901889-1024-1024.jpg';
import Img4 from './img-producto/juego-ps5-fisico-ratchet-clank-una-dimension-aparte.jpg';

function ProductoImagenes() {
  const [imagenPrincipal, setImagenPrincipal] = useState(ImgPrincipal);

  function cambiarFoto(nuevaImagen) {
    setImagenPrincipal(nuevaImagen);
  }

  return (
    <div className="imagenes-producto">
        <div className="conjunto-imagenes">

            <div onClick={() => cambiarFoto(ImgPrincipal)}>
            <img src={ImgPrincipal} alt="" className="imagenen-secundaria" />
            </div>

            <div onClick={() => cambiarFoto(ImgScundarial)}>
            <img src={ImgScundarial} alt="" className="imagenen-secundaria" />
            </div>

            <div onClick={() => cambiarFoto(Img3)}>
            <img src={Img3} alt="" className="imagenen-secundaria" />
            </div>

            <div onClick={() => cambiarFoto(Img4)}>
            <img src={Img4} alt="" className="imagenen-secundaria" />
            </div>

        </div>

        <div className="div-imagen-principal">
        <img src={imagenPrincipal} alt="img" id="imagen-principal" />
        </div>

    </div>
  );
}

export default ProductoImagenes;
