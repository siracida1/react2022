import React, { useContext, useState } from 'react';
import { getFirestore } from '../../firebase/firebase';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';
import ItemCart from '../ItemCart/ItemCart';
import FormOrden from '../Formulario/FormOrden';
import { Card } from 'react-bootstrap';

const Cart = () => {

  const { carrito, limpiarCarrito, precioTotal } = useContext(CartContext);
  const [ordenCreada, setOrdenCreada] = useState();

  return (
    <div> <Container >
      {carrito.length > 0 ?
        <div>
          {carrito.map(elemento => <ItemCart producto={elemento} key={elemento.item.id} />)}
          
          <h2>Precio total: ${precioTotal()}</h2>
          <Button  variant="warning" onClick={limpiarCarrito}>Limpiar carrito</Button>
          <FormOrden setOrdenCreada={setOrdenCreada} />
        </div>
        :
        <div class="row justify-content-center" >

          <h2 text-success>Carrito vacio</h2>
          <br/>
          <Button variant="warning"><Link to='/'>VOLVER AL MENU</Link></Button>
        </div>
      }
      {ordenCreada &&
        
          <div class="row justify-content-center">
          <Card style={{ width: '40rem' }}>

          <h2 text-success>Orden creada! ID de la orden: {ordenCreada}</h2>

          </Card>
        </div>
      }
      </Container>
    </div>
  )
};

export default Cart;
