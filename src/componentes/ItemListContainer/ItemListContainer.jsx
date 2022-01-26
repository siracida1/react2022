import React, {useEffect, useState} from 'react' 
import ItemList from './ItemList'
import { productosMenu } from '../../productos/data'

const ItemListContainer = () => {
    const [productos,setProductos] = useState([])
      

    // const traerProductos = fetch('https://fakestoreapi.com/products/')
    const traerProductos = new Promise ((response, reject)=> {
          setTimeout (()=>{
              response (productosMenu)
          },3000 )
    })
   
    useEffect(() => {
        traerProductos
        .then(data=>{setProductos(data)})
    }, [] )

    return (
        <div style={{width: "100%"}}>
            <h2>Cocineros</h2>
            <ItemList productos={productos}/>

            <h2>Menu</h2>
            <ItemList productos={productos}/>


        </div>
    )
}

export default ItemListContainer
