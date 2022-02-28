import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';



export const Formulario = () => {
  
  return < Container >
    <div class="row justify-content-center" >
          <h1>Registrarse</h1>
          <h3>SE PARTE DE LA COMUNIDAD DE CHEF MAS GRANDE DE ARGENTINA</h3>
          <p>TRABAJA CON NOSOTROS</p>
    <Form>
    <>
                    <Form.Control size="lg" type="text" placeholder="Nombre y Apellido" />
                    <br />
                    <Form.Control size="lg" type="text" placeholder="Nro de Celular" />
                    <br />
                    <Form.Control size="lg" type="text" placeholder="Email" />
                    <br />
                    <Form.Control size="lg" type="text" placeholder="Provincia" />
                    <br />
                    <Form.Control size="lg" type="text" placeholder="Ciudad" />
                    <br />
                    <Form.Control size="lg" type="text" placeholder="Direccion" />
                    <br />
             </><h2>Generar usuario y contraseña</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email usuario </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    Nunca compartiremos tu correo electrónico con nadie.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Genera contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="Newsletter" label="Newsletter" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
        </Button>
    </Form>

    </div></Container>;
};
