import { cocineros } from "./data2";
import imagen from '../img/pizza.jpg';
import empanad from '../img/empand.jpg';
import empanad2 from '../img/empanad2.jpg';
import hamb from '../img/hamb.jpg';
import logoUcheff from '../img/logoUcheff.png';

export const productosMenu = [                    //array de productos 
    {
        id: '1',
        cocineros: cocineros,
        img: imagen,
        titulo: "pizza",                        //: string estre comillas y ,
        tamano: "grande",
        gusto: "muzzarella",
        ingredientes: "muzzarella, salsa de tomate",
        precio: 500,
    },
    {
        id: '2',
        cocineros: cocineros, 
        img: empanad,
        titulo: "empanadas",        
        gusto:"jamon y queso",
        ingredientes: "jamon y muzzarella",
        precio: 1000,
    },
    {
        id: '3',
        cocineros: cocineros,
        img: empanad2,
        titulo: "empanadas",
        gusto: "carne",
        ingredientes: "carne suave, aceitunas",  
        precio: 1000,
    },
    {
        id: '4',
        cocineros: cocineros,
        img: hamb,
        titulo: "hamburguesa",
        tamano: "grande",
        ingredientes: "hamburguesa cheddar con papas fritas",
        precio: 1500,

    },
    {
        id: '5',
        cocineros: cocineros,
        img: hamb,
        titulo: "milanesa",
        tamano: "grande",
        ingredientes: "lomo y papas fritas",
        precio: 1500,

    },
    {
        id: '6',
        cocineros: cocineros,
        img: hamb,
        titulo: "papas",
        tamano: "grande",
        ingredientes: "fritas / Horno",
        precio: 1500,

    },


]

