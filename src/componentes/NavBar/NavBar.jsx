import react from "react";
import {Link, link} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"; 
import { Form, FormControl, Nav, Container, Button,Navbar, Offcanvas, NavDropdown} from 'react-bootstrap';

export default function NavBar(){

    return (
          <>
        <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand><Link to={'/'}>Bienvenidos A Ucheff</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">UNDERCHEFF</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">COMUNDAD UCHEFF</Nav.Link>
          <Nav.Link href="#action2">PEDIDO</Nav.Link>
          <NavDropdown title="MENU" id="offcanvasNavbarDropdown">
            <NavDropdown.Item ><Link to='/categorias/pizza' >PIZZA</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/categorias/empanada' >EMPANADA</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/categorias/hamburguesa' >HAMBURGUESA</Link> </NavDropdown.Item>
            <NavDropdown.Item ><Link to='/categorias/milanesa' >MILANESA</Link> </NavDropdown.Item>
            <NavDropdown.Item ><Link to='/categorias/papas' >PAPAS</Link> </NavDropdown.Item>
            <NavDropdown.Item ><Link to='/categorias/bebidas' >BEBIDA</Link> </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
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
          <Button variant="outline-success">BUSCAR POR ZONA</Button>
        </Form>

        <CartWidget />
        
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
          
          </>

    )
}