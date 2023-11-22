import './Header.css';
import logo from './logo-header.png';
import './Header.css';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(){
    return(
    <header>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid className='color-nav'>
                <Navbar.Brand href="#"><img src={logo} alt="logo" className='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1" className='link-nav'>Inico</Nav.Link>
                    <Nav.Link href="#action2" className='link-nav'>Ofertas</Nav.Link>
                    <Nav.Link href="#action2" className='link-nav'>About</Nav.Link>
                    
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success" className='boton-lupa'><FaMagnifyingGlass/></Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header> 
)
}

export default Header