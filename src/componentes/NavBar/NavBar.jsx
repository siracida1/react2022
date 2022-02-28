import react from "react";
import {Link, link} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"; 
import { Badge, Form, FormControl, Nav, Container, Button,Navbar, Offcanvas, NavDropdown} from 'react-bootstrap';

export default function NavBar(){

    return (
          <>
        <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand><Link to={'/'} ><Badge pill bg="danger">BIENVENIDOS A UNDERCHEF </Badge></Link></Navbar.Brand>
                    
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"><Badge pill bg="danger">BIENVENIDOS A UNDERCHEF </Badge></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/Form/Form"><Badge pill bg="warning" text="light">SER UN UCHEFF </Badge></Nav.Link>
          <Nav.Link href="#action2"><Badge pill bg="warning" text="light">ESTADO DE TU PEDIDO </Badge></Nav.Link>
          <NavDropdown title="MENU" id="offcanvasNavbarDropdown">
            <NavDropdown.Item ><Link to='/categorias/pizza' ><Badge pill bg="warning" text="light">PIZZA </Badge></Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/categorias/empanada' ><Badge pill bg="warning" text="light">EMPANADA </Badge></Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/categorias/hamburguesa' ><Badge pill bg="warning" text="light">HAMBURGUESA </Badge></Link> </NavDropdown.Item>
            <NavDropdown.Item ><Link to='/categorias/milanesa' ><Badge pill bg="warning" text="light">MILANESA </Badge></Link> </NavDropdown.Item>
            <NavDropdown.Item ><Link to='/categorias/pollo' ><Badge pill bg="warning" text="light">POLLO </Badge></Link> </NavDropdown.Item>
            <NavDropdown.Item ><Link to='/categorias/papas' ><Badge pill bg="warning" text="light">PAPAS </Badge></Link> </NavDropdown.Item>
            <NavDropdown.Item ><Link to='/categorias/bebida' ><Badge pill bg="primary" text="light">BEBIDA </Badge></Link> </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Form/Form">
              SUMATE A LA COMUNIDAD
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="warning">BUSCAR POR ZONA</Button>
        </Form>

        <CartWidget />
      
        
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
          
          </>

    )
}