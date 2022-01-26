import React from "react";
import Item from './Item'

const ItemList = ({ productos}) => {
   return (
      <div style= {{width: "100%"}}>
          {productos.map ((prod, index ) =>
        (
         <Item prod={prod} key = {index} />
        ))
        }
      </div>
   )
}

export default ItemList