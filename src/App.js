import logo from './logo Ucheff.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as router, Switch, route} from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import Header from './componentes/Pages/Header';
import Ucheff from './componentes/Pages/Ucheff';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { ItemCount } from './componentes/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header"> <section>
        <h1>Hola Ucheff</h1>
        <hr/>
        <h3>Gusto y rapidez</h3>
      </section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Delivery siempre cerca!!!
        </p>
      
      </header>
      <NavBar/>
      <ItemCount max={5} min={1}/>
      <ItemListContainer />
      <Header/>
      <Ucheff/>


    </div>
  );
}

export default App;
