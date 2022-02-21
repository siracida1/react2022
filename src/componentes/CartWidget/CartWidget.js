import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';
import Carrito from './Carrito.png';


const CartWidget = () => {

   const {cantidadTotal} = useContext(CartContext);

    return (
        <Link to='/carrito'>
        <img src={Carrito} width = '70px' alt=""/>
        <span>{cantidadTotal()}</span>

             
            
        </Link>
    )
}

export default CartWidget
