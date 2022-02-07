import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { ItemCount } from './ItemCounts/ItemCount';


export const ItemDetail = ({producto}) => {


    const [agrego, setAgrego] = useState(false);

    const onAdd = () => {

        const onAdd = (cantidad) => {
            console.log('sumaste productos:'+ cantidad);
            setAgrego(true);
      
        }
      
    }


  return ( 
  <div> 
     <h2>{producto.titulo}</h2>
     <h4>{producto.precio}</h4>
     <select>
         {producto.cocineros.map(cocinero=><option value={cocinero.nombre}>{cocinero.nombre} </option>)}
         
     </select>
      {agrego?
      <Link to='/carrito'>Pagar pedido</Link>
      :
           <ItemCount max={5} min={1} onAdd={onAdd}/>
    }
  </div>
  )
};
