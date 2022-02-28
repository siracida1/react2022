import React, {useEffect, useState} from 'react' 
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { Badge } from 'react-bootstrap'
import { getFirestore } from '../../firebase/firebase'

const ItemListContainer = () => {                                     //arrow function
    const [productos,setProductos] = useState([])                     // array vacio []
        
    const { catId } = useParams();


    
    useEffect(() => {
      
        const db = getFirestore ()
        let coleccion;
        if (catId) {
             coleccion = db.collection('items').where('titulo','==', catId)
        } else {
         coleccion = db.collection('items')
        }
        coleccion.get()
        .then(res => {
            if (res.size === 0){
                console.log ('No hay resultados')
            }
            setProductos(res.docs.map(elemento => {

               return { id: elemento.id, ...elemento.data()}
            }))


        })
        .catch(error => console.log('Error desde firebase ->', error))

    }, [catId] )

    return (
        <div style={{textAlign:"center",}}>
             <Badge pill bg="warning" text="dark"><h2>Menu</h2> </Badge>
            
            <br/> <br/>
            <ItemList productos={productos}/>

        </div>
    )
}

export default ItemListContainer
