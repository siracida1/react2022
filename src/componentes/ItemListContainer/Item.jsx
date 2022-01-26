import React from 'react';

const Item = ({ prod }) => {
     console.log (prod);

     return (
       <div style={{ display: "inline-flex", height: "200px", width: "200px", border: "1px solid #0924BD", borderradius: '5px', padding: "5px"}}>
          {prod.titulo}

    </div>
     )

}

export default Item