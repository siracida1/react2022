import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { ItemCount } from './ItemCounts/ItemCount';
import CartProvider, { CartContext } from '../context/CartProvider';
import { Col, Container, Row } from 'react-bootstrap';

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
          <img src={producto.img} width='400px' alt="imagen producto" />
        </Col>
        <Col style={{display: 'flex', flexFlow: 'column wrap', justifyContent: 'space-evenly'}}>
          <h2>{producto.titulo}</h2>
          <h4>{producto.precio}</h4>
          <p>Ingredientes: {producto.ingredientes}</p>
          <p>Tamaño: {producto.tamano}</p>

          {agrego ?
            <Link to='/carrito'>Pagar pedido</Link>
            :
            <ItemCount max={5} min={1} onAdd={onAdd} />
          }

        </Col>
      </Row>
    </Container>
  )
};
