import React, { useContext, useState } from 'react';
import { getFirestore } from '../../firebase/firebase';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';
import ItemCart from '../ItemCart/ItemCart';
import firebase from 'firebase/app';

const Cart = () => {

    const {carrito, limpiarCarrito, precioTotal} = useContext(CartContext);
    const [ordenCreada, setOrdenCreada] = useState();
    const terminarCompra = () => {
      console.log('resumen de la orden de compra')         // dentro de esta funcion va la api de mercadopago
      console.log(carrito)
      
      const userData = {
        nombre:'Mauricio',
        apellido:'Ohaco',
        telefono:'121121122',
        direccion:''
      }
        const orden = {
          comprador: userData,
          items: carrito,
          fecha: firebase.firestore.Timestamp.fromDate(new Date() ),
          total: precioTotal()
        }

        const db = getFirestore()
        const ordenes= db.collection('ordenes')

        ordenes.add(orden).then(res =>{
          setOrdenCreada(res.id)
          limpiarCarrito()
        })
        .catch(error => console.log('error al crear orden ->', error))

    }

  return (
   <div>
     {carrito.length > 0?
     <div>
              {carrito.map(elemento=><ItemCart producto={elemento} key={elemento.item.id}/>)}

              <h3>Precio total: ${precioTotal()}</h3>
              <Button onClick={limpiarCarrito}>Limpiar carrito</Button>
              <Button onClick={terminarCompra}> Terminar compra</Button>

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
