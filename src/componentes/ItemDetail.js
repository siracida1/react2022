import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { ItemCount } from './ItemCounts/ItemCount';
import CartProvider, { CartContext } from '../context/CartProvider';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

export const ItemDetail = ({ producto }) => {

  const { agregarAlCarrito } = useContext(CartContext)

  const [agrego, setAgrego] = useState(false);

  const onAdd = (cantidad) => {

    console.log('sumaste productos:' + cantidad);
    agregarAlCarrito(producto, cantidad);
    setAgrego(true);

  }
  console.log(producto)


  return (
    <Container>
      <Row>
        <Col>
          <img src={producto.img} className= "rounded" width='400px' alt="imagen producto" />
        </Col>
        <Col style={{display: 'flex', flexFlow: 'column wrap', justifyContent: 'space-evenly'}}>
          <h2>{producto.titulo}</h2>
          <h4>{producto.precio}</h4>
          <p>Ingredientes: {producto.ingredientes}</p>
          <p>Tamaño: {producto.tamano}</p>

          {agrego ?
           <Button variant="warning"><Link to='/carrito'>PAGAR PEDIDO</Link></Button>
            :
            <ItemCount max={5} min={1} onAdd={onAdd} />
          }

        </Col>
      </Row>
    </Container>
  )
};
