import logo from './logo Ucheff.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel} from 'react-bootstrap';
import React, { useState } from 'react';
import { BrowserRouter as router, Switch, route, Route, Router, BrowserRouter } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';
import { ItemCount } from './componentes/ItemCounts/ItemCount';
import { Formulario } from './componentes/Form/Form';


function App() {
  return (
    <BrowserRouter>                                                   
          <NavBar/>                                                     
        <Switch>                                                       
           <Route exact Path='/'>                                                     
       <header className="App-header"> 
          
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./img/pexel-andrea-piacquadio-3785684.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

        </header>
                <ItemListContainer />

      </Route>
           <Route path='/categorias/:catId' >
                 <ItemListContainer />
  
           </Route>
           <Route path='/item/:itemId' >
                 <ItemDetailContainer/>

           </Route>
           <Route path='/carrito' >
               <h1>Carrito</h1>>
           </Route>
           <Route path='/Formulario' >
                  <Formulario/>

           </Route>

        </Switch>

        
    
    </BrowserRouter>
  );
}

export default App;
