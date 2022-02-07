import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';



export const Formulario = () => {
  return <div className='Container'>
    <h1>Registrarse</h1>
    <Form>
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
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Enviar
        </Button>
    </Form>

  </div>;
};
