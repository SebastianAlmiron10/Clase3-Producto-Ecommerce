import './Hero.css';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './semana-descuento.png';
import ExampleCarouselImag from './envio-gratis.png';
import ExampleCarouselIma from './cyber.png';


function Hero() {
    return(
        <Carousel>
            <Carousel.Item>
                <img src={ExampleCarouselImage} alt="" width={1400} height={400} className='img-carousel'/>
                <Carousel.Caption>
                <h3>Ofertas semanales</h3>
                <p>Mira el  catalogo de las ofertas deesta semana.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ExampleCarouselImag} alt="" width={1400} height={400} className='img-carousel'/>
                <Carousel.Caption>
                <h3>Envio gratis</h3>
                <p>Envios gratis a todo el pais.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ExampleCarouselIma} alt="" width={1400} height={400} className='img-carousel'/>
                <Carousel.Caption>
                <h3>No te lo pierdas</h3>
                <p>Ofertas inperdibles.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Hero