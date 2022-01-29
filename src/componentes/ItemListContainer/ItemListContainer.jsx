import React, {useEffect, useState} from 'react' 
import ItemList from './ItemList'
import { productosMenu } from '../../productos/data'
import { cocineros } from '../../productos/data2'

const ItemListContainer = () => {                                     //arrow function
    const [productos,setProductos] = useState([])                     // array vacio []
      

    // const traerProductos = fetch('https://fakestoreapi.com/products/') fech llamada sincronica a la api
    const traerProductos = new Promise ((response, reject)=> {                    // guardamos la promesa API Promise con la palabra New (response y reject funcioes nativas dentro de promesas)
          setTimeout (()=>{                                                     //setTimeuot funciona nativa de js ()llev los parametros una funcion callback, hacemos arrowfunct
              response ({menu: productosMenu, cocineros: cocineros})                                    // response los productos menu 
          },3000 )                                                        // tiempo de respueta 
    })
   
    useEffect(() => {
        traerProductos                                            //respuesta de la promesa con then de data
        .then(data=>{setProductos(data)})                         // lo que ponga dentro de llaves lo setea llama
    }, [] )

    return (
        <div style={{display:"flex", flexflow:"row wrap", justifyContent: "space-around", alignContent:"center", width: "100%"}}>
            
            <h2>Menu</h2>
            <ItemList productos={productosMenu}/>

            <h2>Cocineros</h2>
            <ItemList productos={cocineros, cocineros}/>


        </div>
    )
}

export default ItemListContainer
