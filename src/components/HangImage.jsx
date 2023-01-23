// Imagenes importadas

import dolar from '../assets/1pts.png'
import euro from '../assets/2pts.png';
import black from '../assets/3pts.png';
import peronio from '../assets/5pts.png';
import peso from '../assets/8pts.png';

// Socket io importado

import io from 'socket.io-client';
const socket = io('http://localhost:4000')

// Hook para utilizar las funciones de web socket.

import { useState, useEffect } from 'react';
import { json } from 'react-router-dom';

// Const para recuperar los datos del localstorange

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

// array de objetos de las tarjetas - puntos.

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
        id: 1
    },
    {
        nombre: euro,
        valor: "2",
        width: 150, 
        right: 50,
        left: 30, 
        margin: 30, 
        zIndex: 2, 
        maxHeight: 500,
        id: 2
    },
    {
        nombre: black,
        valor: "3",
        width: 150, 
        right: 50,
        left: 30, 
        margin: 30, 
        zIndex: 2, 
        maxHeight: 500,
        id: 3
    },
    {
        nombre: peronio,
        valor: "5",
        width: 100, 
        right: 50,
        left: 30, 
        margin: 30, 
        zIndex: 2, 
        maxHeight: 500,
        id: 4
    },
   
    {
        nombre: peso,
        valor: "8",
        width: 190, 
        right: 50,
        left: 30, 
        margin: 30, 
        zIndex: 2, 
        maxHeight: 500,
        id: 5

    },
];

// metodo para disparar el evento clic de los puntajes.

export function HangImage (props) {

    const handleSubmit = (message) => {
        //e.preventDefault();
        socket.emit('message', message)
       // setMessage('')
      }
    
      // WEB SOCKET.

      useEffect(() => {
    
        const receiveMessage = message => {
          console.log("message: ", message)
        };
        socket.on('broadcast-message', (nuevoValor) => {

            receiveMessage(nuevoValor)
            setTexto(nuevoValor)

        });

       const usuariosconectados = usuarios => {
            console.log("usuarios: ", usuarios)
          };
          socket.on('broadcast-usuario', (usuarioslogueados) => {
            console.log(usuarioslogueados)
  
             // receiveMessage(nuevoValor)
             //  setTexto(nuevoValor)
  
          });

        /*
        return () => {
          socket.off('message', receiveMessage);
        }; */
    
      }, []);


let plata = [];
const [texto, setTexto] = useState('')
console.log(texto)
const actualizarTexto = (valor) => {

    handleSubmit(valor)
    setTexto(valor)

}


for (const image of images) {

    plata.push (<img 
        src={image.nombre} 
        key={image.id}
        alt="Hang image" 
        onClick={()=>actualizarTexto(image.valor)} 
        style={
            {width: image.width, right: image.right ,left: image.left, margin: image.margin, zIndex: image.zIndex, maxHeight: image.maxHeight}
        }
        />)

}

// Funcion para cerrar sesión

function cerrarSesion() {

    localStorage.removeItem("cuenta");
    window.location.reload()
}

// Trae el nombre del usuario

let usuarioNombre = props.usu || JSON.parse(localStorage.getItem("cuenta")).usu || '';

return (
    <>
     <article className="Container">
              {/* Contador de intentos */}
              <h1 style={
                {color:'white', backgroundColor: "black",zIndex:3, }
            }>Votos: </h1> <h4 

            style={
                {color:'white'}}

            
            > {usuarioNombre.toUpperCase()} </h4>

              {plata}  <a className="nav-link  h5  text-center"  style={{color:"white", backgroundColor: "blue"}} >Enviar Puntuación</a>
<h3 
              
style={
    {color:'white', backgroundColor: 'red'}
}             
              >{usuarioNombre + " " + texto}</h3> 

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