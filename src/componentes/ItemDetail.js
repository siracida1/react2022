import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { ItemCount } from './ItemCounts/ItemCount';
import CartProvider, { CartContext} from '../context/CartProvider';

export const ItemDetail = ({producto}) => {

    const {agregarAlCarrito} = useContext(CartContext)

    const [agrego, setAgrego] = useState(false);

    const onAdd = (cantidad) => {

            console.log('sumaste productos:'+ cantidad);
            agregarAlCarrito(producto, cantidad);
            setAgrego(true);   
              
    }


  return ( 
  <div> 
     <h2>{producto.titulo}</h2>
     <h4>{producto.precio}</h4>
    
      {agrego?
      <Link to='/carrito'>Pagar pedido</Link>
      :
           <ItemCount max={5} min={1} onAdd={onAdd}/>
    }
  </div>
  )
};
