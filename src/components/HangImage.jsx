import dolar from '../assets/1pts.png'
import euro from '../assets/2pts.png';
import black from '../assets/3pts.png';
import peronio from '../assets/5pts.png';
import peso from '../assets/8pts.png';
import { letters } from '../helpers/letters';
import { Container, Row, Col } from 'react-grid';

import { useState, useEffect } from 'react';

export const Registrar = () =>{
    const obtenerRegistros = () => {
        var datos = localStorage.getItem("registroslogin");
        if(datos){
            return JSON.parse(datos);
        } else {
            return[];
        }
        }
    }

const images = [
    { 
        nombre: dolar,
        valor: "1",
        width: 150, 
        right: 50,
        left: 30, 
        margin: 30, 
        zIndex: 2, 
        maxHeight: 500,
    },
    {
        nombre: euro,
        valor: "2",
        width: 150, 
        right: 50,
        left: 30, 
        margin: 30, 
        zIndex: 2, 
        maxHeight: 500
    },
    {
        nombre: black,
        valor: "3",
        width: 150, 
        right: 50,
        left: 30, 
        margin: 30, 
        zIndex: 2, 
        maxHeight: 500
    },
    {
        nombre: peronio,
        valor: "5",
        width: 100, 
        right: 50,
        left: 30, 
        margin: 30, 
        zIndex: 2, 
        maxHeight: 500
    },
   
    {
        nombre: peso,
        valor: "8",
        width: 190, 
        right: 50,
        left: 30, 
        margin: 30, 
        zIndex: 2, 
        maxHeight: 500

    },
];

export function HangImage (props) {
    
let plata = [];
const [texto, setTexto] = useState('')
console.log(texto)
const actualizarTexto = (valor) => {

    setTexto(valor)

}
for (const image of images) {

    plata.push (<img 
        src={image.nombre} 
        alt="Hang image" 
        onClick={()=>actualizarTexto(image.valor)} 
        style={
            {width: image.width, right: image.right ,left: image.left, margin: image.margin, zIndex: image.zIndex, maxHeight: image.maxHeight}
        }
        />)

}

function cerrarSesion() {

    localStorage.removeItem("cuenta");
    window.location.reload()
}

return (
    <>
     <article class="Container">
              {/* Contador de intentos */}
              <h1 style={
                {color:'white', backgroundColor: "black",zIndex:3, }
            }>Votos: </h1> <h4 

            style={
                {color:'white'}}

            
            > {props.usu.toUpperCase()} </h4>

              {plata}  <a className="nav-link  h5  text-center"  style={{color:"white", backgroundColor: "blue"}}   onClick={''}  >Enviar Puntuación</a>
<h3 
              
style={
    {color:'white', backgroundColor: 'red'}
}             
              >{texto}</h3> 

     {/* Botones de letras */}
     


     { /*
     letters.map ((letter) => (

      <button 
      key = {letter} > 
      {letter} 
      </button>

     ))
     */}

 {/* Palabra oculta */}
{/*
 <h1

 style={
    {paddingLeft: 1154, paddingBottom: 0, zIndex:1, borderColor:"white", color:'white'}
}
>V 1.0</h1> */}


 <a className="nav-link  h5  text-center"  style={{color:"white", backgroundColor: "black"}}   onClick={ cerrarSesion}  >Cerrar Sesión</a>
 </article>
    </>

)
};




