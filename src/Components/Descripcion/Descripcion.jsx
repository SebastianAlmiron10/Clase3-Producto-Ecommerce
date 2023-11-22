import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ListGroup from 'react-bootstrap/ListGroup';
import './Descripcion.css'

const popover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Descripcion</Popover.Header>
        <Popover.Body>
        <ListGroup>
            <ListGroup.Item>Incluye control.</ListGroup.Item>
            <ListGroup.Item>Resolución de 3840px x 2160px.</ListGroup.Item>
            <ListGroup.Item>Memoria RAM de 16GB.</ListGroup.Item>
            <ListGroup.Item>Cuenta con: 1 dock, 1 cable de alimentación ca, 1 cable hdmi, 1 cable usb, 1 guía de inicio rápido, 1 guía de seguridad.</ListGroup.Item>
            <ListGroup.Item>La duración de la batería de los controles depende del uso que se le dé al producto.</ListGroup.Item>
        </ListGroup>
        </Popover.Body>
    </Popover>
  );

function Descripcion() {
    return(
        <div className="container-descripcion">
           <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button variant="success">Click descripcion</Button>
            </OverlayTrigger>

        </div>
    );
}

export default Descripcion