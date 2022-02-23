import React from "react";
import Item from './Item'
import { Container, Row, Col } from "react-bootstrap";

const ItemList = ({ productos }) => {
   return (

      <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-evenly'}}>
         {productos.map((prod, index) => (<Item prod={prod} key={index} />))}
      </div>
   )
}

export default ItemList