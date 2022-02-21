import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {

  const [carrito, setCarrito] = useState([]);
  
  const agregarAlCarrito = (producto, cantidad) => {
    if (carrito.some(elemento => elemento.item.id === producto.id)){
        const indiceProducto = carrito.findindex(elemento => elemento.item.id === producto.id);
        carrito[indiceProducto]. cantidad= carrito[indiceProducto].cantidad + cantidad;
        setCarrito([...carrito])
    }else {      
          const nuevoProducto ={
            item: producto, 
            cantidad

          } 
          setCarrito([nuevoProducto, ...carrito]);
    }
   

  }

  const borrarDelcarrito = (id) => {
    const carritoActualizado = carrito.filter(elemento=> elemento.item.id !==id)
    setCarrito(carritoActualizado)

  }

  const limpiarCarrito =() => {
    setCarrito([])
   
  }

  const cantidadTotal = () => {

    return carrito.reduce ((acumulador, producto) => acumulador = acumulador + producto.cantidad,0)
  }

  const precioTotal = () => {
    return carrito.reduce ((acumulador, producto) => acumulador = acumulador + (producto.cantidad*producto.item.precio),0)

  }




  return (
  <CartContext.Provider value ={{carrito, agregarAlCarrito, borrarDelcarrito, limpiarCarrito, cantidadTotal, precioTotal }}>
     {children}

  </CartContext.Provider>
  )
};

export default CartProvider;
