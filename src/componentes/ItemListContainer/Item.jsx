import React from 'react';

const Item = ({ prod }) => {
     console.log (prod);

     return (
       <div style={{ textAlign: 'center', backgroundColor: "light" ,display: "inline-flex",margin:"1rem", height: "200px", width: "200px", border: "3px solid #EE5A24", borderradius: '3px', padding: "5px"}}>
          {prod.titulo} {prod.tamano} {prod.gusto} {prod.ingredientes} {prod.precio} {prod.nombre} {prod.especialidad} {prod.haburguesas} 

    </div>
     )

}

export default Item