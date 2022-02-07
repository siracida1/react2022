import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Item = ({ prod }) => {
     console.log (prod);

     return (
       <div> <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={prod.img} />
       <Card.Body>
         <Card.Title>{prod.titulo} {prod.nombre}</Card.Title>
         <Card.Text>
         {prod.tamano} {prod.gusto} {prod.ingredientes}{prod.especialidad} {prod.haburguesas}{prod.valoracion}
         </Card.Text>
         <Card.Text>  {prod.precio}  </Card.Text>
         <Link to={`/item/ ${prod.id}`} >Ver mas</Link>         
        {/* <Button variant="primary">Ver detalle</Button> */}
       </Card.Body>
     </Card> <br/>
    </div>
     )

}

export default Item