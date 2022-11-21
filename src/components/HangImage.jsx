import dolar from '../assets/1pts.png'
import euro from '../assets/2pts.png';
import black from '../assets/3pts.png';
import peronio from '../assets/5pts.png';
import peso from '../assets/8pts.png';
import { letters } from '../helpers/letters';

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
        valor: "1"
        },
        {
            nombre: euro,
            valor: "2"
            },
            {
                nombre: black,
                valor: "3"
                },
                {
                    nombre: peronio,
                    valor: "5"
                    },
   
                    {
                        nombre: peso,
                        valor: "8"
                        },
];

export function HangImage (props) {
    
let plata = [];
const [texto, setTexto] = useState('')
console.log(texto)
const actualizarTexto = (valor) => {

    setTexto(texto + valor)

}
for (const image of images) {

    plata.push (<img 
        src={image.nombre} 
        alt="Hang image" 
        onClick={()=>actualizarTexto(image.valor)} 
        style={
            {width: 170, right: 50,left: 30, margin: 30, zIndex: 2, maxHeight: 500}
        } 
        />)

}

function cerrarSesion() {
    document.getElementById("caja_menu").style.display = "none";
    document.getElementById("form_login").style.display = "block";
    document.getElementById("txtusu").value = "";
    document.getElementById("txtpas").value = "";
    document.getElementById("txtusu").focus();
}

return (
    <>
              {/* Contador de intentos */}
              <h1 style={
                {backgroundColor: "black",zIndex:3}
            }>Votos: </h1> {props.usu.toUpperCase()}
              

              {plata} <h3>{texto}</h3> 
     {/* Botones de letras */}

     {
     letters.map ((letter) => (

      <button 
      key = {letter} > 
      {letter} 
      </button>

     ))
     }

 {/* Palabra oculta */}

 <h1 

 style={
    {paddingLeft: 1154, paddingBottom: 0, zIndex:1}
}
 >V 1.0</h1>


 <a className="nav-link  h5  text-center"  style={{color:"white", backgroundColor: "black"}}  href=" " onClick={ cerrarSesion}  >Cerrar Sesión</a>
    </>
)
}; 

