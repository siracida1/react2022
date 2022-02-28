import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartProvider';

const ItemCart = ({producto}) => {

    const {borrarDelcarrito} = useContext(CartContext);
    
    const borrar = () => {
        console.log('borraste'+ producto.item.titulo)
        borrarDelcarrito(producto.item.id)
    }
  
    return (
    
   <div>
        <h1>  {producto.item.titulo}    </h1>
        <Button variant="warning" onClick={borrar}>Borrar del carrito</Button>
  </div>
  
  )
};

export default ItemCart;

