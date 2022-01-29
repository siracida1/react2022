import React, { useState } from 'react';

export const ItemCount = ({ max, min}) => {
     
  const [contador, setContador] = useState(min);  
  
  const sumar = () => {
     if (contador < max) {
     setContador (contador + 1)

  }
  }
  const restar = () => {
      if (contador > min){
      setContador (contador - 1)
  }
  }
  const onAdd = () => {
      console.log('sumaste ${contador} de productos');

  }

  return <div>
      <button onClick={sumar}>+</button>
      <p>{contador}</p>
      <button onClick={restar}>-</button>
      <button onClick={onAdd} >Agregar al carrito</button>



        </div>;
};
