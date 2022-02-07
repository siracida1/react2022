import React, {useEffect, useState} from 'react' 
import ItemList from './ItemList'
import { productosMenu } from '../../productos/data'
import { cocineros } from '../../productos/data2'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {                                     //arrow function
    const [productos,setProductos] = useState([])                     // array vacio []
        
    const { catId } = useParams();


                                                                                     // const traerProductos = fetch('https://fakestoreapi.com/products/') fech llamada sincronica a la api
    const traerProductos = new Promise ((response, reject)=> {                    // guardamos la promesa API Promise con la palabra New (response y reject funcioes nativas dentro de promesas)
          setTimeout (()=>{   
            if (catId)  {
                 response (productosMenu.filter(element => element.titulo === catId))
            }else {
                 response (productosMenu);
            }                                                                                                   //setTimeuot funciona nativa de js ()llev los parametros una funcion callback, hacemos arrowfunct
           },1000 )                                                                                // tiempo de respueta 
    })                                                                                            // response los productos menu 
       
   
    useEffect(() => {
        traerProductos                                                                          //respuesta de la promesa con then de data
        .then(data=>{setProductos(data)})                                                   // lo que ponga dentro de llaves lo setea llama
    }, [] )

    return (
        <div style={{display:"flex", flexflow:"row wrap", justifyContent: "space-around", alignContent:"center", width: "100%"}}>
            
            <h2>Menu</h2>
            <br/>
            <ItemList productos={productos}/>

        </div>
    )
}

export default ItemListContainer
