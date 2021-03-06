import React, { useRef, useContext } from "react";
import firebase from "firebase/app";
import { CartContext } from "../../context/CartProvider";
import { getFirestore } from "../../firebase/firebase";
import { Button, Container, Form } from 'react-bootstrap';



export default function FormOrden({ setOrdenCreada }) {
  const { carrito, limpiarCarrito, precioTotal } = useContext(CartContext);

  const nameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  function mandarComprobante() {
    // Acá se ejecuta la funcion de la libreria de email
  }

  function terminarCompra() {

    const db = getFirestore();
    const orders = db.collection("ordenes");

    const orden = {
      comprador: {
        name: nameRef.current.value,
        address: addressRef.current.value,
        city: cityRef.current.value,
        state: stateRef.current.value,
        email: emailRef.current.value,
        mobile: mobileRef.current.value,
      },
      items: carrito,
      fecha: firebase.firestore.Timestamp.fromDate(new Date()),
      total: precioTotal(),
    }

    orders.add(orden)
      .then(({ id }) => {
        console.log('orden ingresada: ' + id);
        setOrdenCreada(id);
        limpiarCarrito();
        mandarComprobante();
      })
      .catch((err) => {
        console.log(err);
      });

  }

  return (
    <Container>
       <div class="row justify-content-center" >
        <h3>Ingresa tus datos:</h3>

        <Form.Control   input type="text" name="name" ref={nameRef} placeholder="Nombre y Apellido" required/>
        <br />

        <Form.Control  input type="number" name="mobile" ref={mobileRef} placeholder="Nro de Celular" required/>
        <br />

        <Form.Control input type="email" name="email" ref={emailRef} placeholder="Email" required/>
        <br />

        <Form.Control input type="text" name="state" ref={stateRef} placeholder="Provincia" required/>
        <br />

        <Form.Control input type="text" name="city" ref={cityRef} placeholder="Ciudad" required/>
        <br />

        <Form.Control input type="text" name="address" ref={addressRef} placeholder="Direccion" required/>
        <br />

        <Button variant="danger" onClick={() => terminarCompra()} >TERMINAR EL PEDIDO</Button>
      </div>
    </Container>
  );
}