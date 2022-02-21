import logo from './logo Ucheff.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel} from 'react-bootstrap';
import React, { useState } from 'react';
import { BrowserRouter as router, Switch, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';
import { ItemCount } from './componentes/ItemCounts/ItemCount';
import { Formulario } from './componentes/Form/Form';
import CartProvider from './context/CartProvider';
import Cart from './componentes/Cart/Cart';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>                                                   
          <NavBar/>                                                     
        <Switch>                                                       
           <Route exact path='/'>                                                     
       <header className="App-header"> 
          <section>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://firebasestorage.googleapis.com/v0/b/uchef-806a0.appspot.com/o/9.png?alt=media&token=4caf2411-3910-47f8-ac32-1616da524fe3"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h1>UNDERCHEF</h1>
                  <p>Delivery desde casa.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://firebasestorage.googleapis.com/v0/b/uchef-806a0.appspot.com/o/8.png?alt=media&token=b064a632-2479-448b-a0a5-b662c3b261c6"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>SOLO A 1KM de distancia</h3>
                  <p>RAPIDO Y de AUTOR.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://firebasestorage.googleapis.com/v0/b/uchef-806a0.appspot.com/o/13.png?alt=media&token=130eacb1-fd20-494c-b6ee-efbf5f282ae7"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>CALIDAD Y PRECIO</h3>
                  <p>LA MEJOR RELACION CALIDAD Y PRECIO.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
         </section>
        </header>
                <ItemListContainer />

      </Route>
           <Route path='/categorias/:catId' >
                 <ItemListContainer />
  
           </Route>
           <Route path='/item/:itemId' >
                 <ItemDetailContainer/>

           </Route>
           <Route path='/carrito'>
                <Cart/>

              </Route>
           <Route path='/Form/Form' >
                  <Formulario/>

           </Route>

        </Switch>

        
    
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
