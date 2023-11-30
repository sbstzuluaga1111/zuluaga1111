// Importa las librerías necesarias y tus componentes
import React  from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../App.css';
import '../css/nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function MiNavbar({ onButtonClick }) {
  return (
    <Navbar  expand="lg" bg="body-tertiary" sticky="top">
      <Container>
      <div className='m-2'>imagen</div>
        <Navbar.Brand>Sebastian Andres Zuluaga Salgado</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />


        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav className="navbar-nav">
        <Nav.Item>
          <Nav.Link>
            <button className="btn" onClick={() => onButtonClick('SobreMi')}>
              Sobre mi
            </button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <button className="btn" onClick={() => onButtonClick('Conocimientos')}>
              Conocimientos
            </button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <button className="btn" onClick={() => onButtonClick('Proyectos')}>
              Proyectos
            </button>
          </Nav.Link>
        </Nav.Item>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default MiNavbar;
