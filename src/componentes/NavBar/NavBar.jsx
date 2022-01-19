import react from "react";
import {link} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"; 

export default function NavBar(){

    return (
          <>
        <div className=""> 
        <ul className="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Menu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Cocineros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trabaja con nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled">Registrate</a>
                    </li>                    
        </ul>
          <CartWidget />
        </div>
          </>

    )
}