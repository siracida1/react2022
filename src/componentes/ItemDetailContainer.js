import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productosMenu } from '../productos/data';
import { cocineros } from '../productos/data2';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
  
    const [producto, setProducto] = useState ({})
    const [cargando, setCargando] = useState (true)
    
    const {itemId} = useParams();


    useEffect (() => {
        const traerProductos = new Promise ((response, reject)=> {                    // guardamos la promesa API Promise con la palabra New (response y reject funcioes nativas dentro de promesas)
            setTimeout (()=>{                                                     //setTimeuot funciona nativa de js ()llev los parametros una funcion callback, hacemos arrowfunct
                response (productosMenu.find(element => element.id === itemId))                                    // response los productos menu 
            },1000 )                                                        // tiempo de respueta 
               
    })
        traerProductos                                            //respuesta de la promesa con then de data
          .then(data=>{ 
              setProducto(data)
                setCargando(false)
            })
          
    }, [])
    
  
  return (
  <div>
    {cargando? <p>CARGANDO</p>: <ItemDetail producto={producto}/>}
  </div>
  )
}