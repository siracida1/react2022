import React, { useContext, useState } from 'react';
import { getFirestore } from '../../firebase/firebase';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';
import ItemCart from '../ItemCart/ItemCart';
import FormOrden from '../Formulario/FormOrden';

const Cart = () => {

  const { carrito, limpiarCarrito, precioTotal } = useContext(CartContext);
  const [ordenCreada, setOrdenCreada] = useState();

  return (
    <div>
      {carrito.length > 0 ?
        <div>
          {carrito.map(elemento => <ItemCart producto={elemento} key={elemento.item.id} />)}

          <h3>Precio total: ${precioTotal()}</h3>
          <Button onClick={limpiarCarrito}>Limpiar carrito</Button>
          <FormOrden setOrdenCreada={setOrdenCreada} />
        </div>
        :
        <div>

          <h2>Carrito vacio</h2>
          <Link to='/'>Ver menu</Link>
        </div>
      }
      {ordenCreada &&
        <div>
          <h2>Orden creada! ID de la orden: {ordenCreada}</h2>

        </div>
      }

    </div>
  )
};

export default Cart;
