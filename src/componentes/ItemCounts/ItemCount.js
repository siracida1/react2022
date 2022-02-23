import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';


export const ItemCount = ({ max, min, onAdd }) => {

  const [contador, setContador] = useState(min);

  const sumar = () => {
    if (contador < max) {
      setContador(contador + 1)

    }
  }
  const restar = () => {
    if (contador > min) {
      setContador(contador - 1)
    }
  }

  return <Container>

    <Row className="justify-content-md-center">
      <Col xs lg="2">
        <Button variant='warning' onClick={restar}>-</Button>
      </Col>
      <Col md="auto"><h3>{contador}</h3></Col>
      <Col xs lg="2">
        <Button variant='danger' onClick={sumar}>+</Button>
      </Col>
      <Col>
        <Button variant='success' onClick={() => onAdd(contador)} >Agregar al pedido</Button>
      </Col>
    </Row>
  </Container>;

};
