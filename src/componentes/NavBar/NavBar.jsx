import react from "react";
import {link} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"; 

export default function NavBar(){

    return (
          <>
        <div style={{display:"flex", justifyContent:"space-around", alignContent:"center", backgroundColor:"Highlight"  }}> 
        <ul>
                    
                        <a href="#">Menu</a><hr />
                   
                   
                        <a href="#">Cocineros</a><hr />
                    
                        <a href="#">Trabaja con nosotros</a>
                    
                        <p class="nav-link ">Registrate</p>
                                        
        </ul>
          <CartWidget />
        </div>
          </>

    )
}