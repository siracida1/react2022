import React from "react";
import Item from './Item'
import { Container, Row, Col } from "react-bootstrap";

const ItemList = ({ productos}) => {
   return (

      <div>
         <Container>
            <Row>
               <Col xs={{ order: 'last' }}>          {productos.map ((prod, index ) => (<Item prod={prod} key = {index} /> )) }
</Col>
               <Col xs>          {productos.map ((prod, index ) => (<Item prod={prod} key = {index} /> )) }
</Col>
               <Col xs={{ order: 'first' }}>          {productos.map ((prod, index ) => (<Item prod={prod} key = {index} /> )) }
</Col>
            </Row>
         </Container>
          {/* {productos.map ((prod, index ) => (<Item prod={prod} key = {index} /> )) } */}
   
      </div>
   )
}

export default ItemList