import React, { useEffect, useState } from 'react';
import { getFirestore } from '../firebase/firebase';
import { useParams } from 'react-router-dom';
import { productosMenu } from '../productos/data';
import { cocineros } from '../productos/data2';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
  
    const [producto, setProducto] = useState ({})
    const [cargando, setCargando] = useState (true)
    
    const {itemId} = useParams();


    useEffect (() => {
       const db = getFirestore()
       const coleccion = db.collection('items')
       const item = coleccion.doc(itemId)
       
       item.get()
       .then(res => {
         if (!res.exists) {
           console.log('No existe el item');
         }
         setProducto({ id: res.id, ...res.data() })
       })
      .catch ( error => console.log(error))
      .finally ( () => setCargando(false)) 
    }, [])
    
  
  return (
  <div>
    {cargando? <p>CARGANDO</p>: <ItemDetail producto={producto}/>}
  </div>
  )
}