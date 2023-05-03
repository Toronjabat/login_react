import DataTable from 'react-data-table-component'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Imagenes importadas

import dolar from '../assets/1pts.png'
import euro from '../assets/2pts.png';
import black from '../assets/3pts.png';
import peronio from '../assets/5pts.png';
import peso from '../assets/8pts.png';
import eightPointsImage from "../assets/peron.gif";
import { Banner } from '../components/Banner';

// Socket io importado

import io from 'socket.io-client';
const socket = io('http://localhost:4000')

// Hook para utilizar las funciones de web socket.

import { useState, useEffect } from 'react';
import { json } from 'react-router-dom';
import { Login } from './Login';

var socketId = ""
socket.on('room', socketid => socketId = socketid)

var array = [];

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
  const [countdown, setCountdown] = useState(3);
  const [isCountdownActive, setIsCountdownActive] = useState(false);

    const handleSubmit = (message) => {
        //e.preventDefault();

        console.log(1)

        let usuario = JSON.parse(localStorage.getItem("cuenta"))

        let obj = { puntuacion: message, usuario: usuario.usu, id: socketId}

        let isAlredyIn = array.find((userPoint) => userPoint.usuario === usuario.usu)
            if (isAlredyIn) {
                isAlredyIn.puntuacion = message
                socket.emit('message', obj)

            } else {
                array.push(obj)
                socket.emit('message', obj)
            }

            setIsCountdownActive(false); // Activar la cuenta regresiva
            setTexto(message)

       // setMessage('')
      }

      // WEB SOCKET.

      useEffect(() => {
    
        const receiveMessage = message => {
          console.log("message: ", message)
        };
        socket.on('broadcast-message', (nuevoValor) => {
      
          if (socketId == nuevoValor.id) return;
      
          console.log(nuevoValor.id);
          let isAlredyIn = array.find((userPoint) => userPoint.usuario === nuevoValor.usurio);
          console.log(isAlredyIn);
      
          if (isAlredyIn){
            isAlredyIn.puntuacion = nuevoValor.puntuacion;

          } else {
            array.push(nuevoValor);
          }
      
          console.log(array);
          
          console.log(nuevoValor);
          setTexto(nuevoValor);
      
        });
        
        const usuariosconectados = usuarios => {
          console.log("usuarios: ", usuarios)
        };
        socket.on('broadcast-usuario', (usuarioslogueados) => {
          console.log(usuarioslogueados)
      
          // receiveMessage(nuevoValor)
          //  setTexto(nuevoValor)
      
        });

        if (isCountdownActive) {
          const countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => {
              if (prevCountdown === 0) {
                clearInterval(countdownInterval); // Detener la cuenta regresiva
                setIsCountdownActive(false); // Desactivar la cuenta regresiva
              }
              return prevCountdown - 1;
            });
          }, 1000);
        }
        setCountdown(3);
        
      }, [isCountdownActive]);

let plata = [];
const [texto, setTexto] = useState('')
const actualizarTexto = (valor) => {

    handleSubmit(valor)
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
console.log(array)
console.log(array[0]?.puntuacion)

const usuarioPuntuacion = {};

const usuarioActual = array.find(item => item.usuario === usuarioNombre);
const puntuacionActual = usuarioActual ? usuarioActual.puntuacion : '';

array.forEach(item => {
    usuarioPuntuacion[item.usuario] = ' ' + item.puntuacion;
  });
  
const borrarPuntuacion = () => {
  const usuarioActual = array.find(item => item.usuario === usuarioNombre);
  if (usuarioActual) {
    usuarioActual.puntuacion = '';
    setTexto({ ...usuarioActual }); // Actualizar el estado con el nuevo objeto de usuario
    socket.emit('message', usuarioActual); // Emitir evento al servidor indicando que se ha borrado la puntuación
  }
  }

  return (
    <>

<div className="d-flex justify-content-end">
  <Navbar variant="dark" expand="lg" >
    <Navbar id="basic-navbar-nav" >
      <Nav className="mr-auto">
        <NavDropdown title="Opciones" id="basic-nav-dropdown" style={{margin:"-2.4rem",padding: "0.7rem"}}>
        <a href="./Ruleta">Ir a Ruleta</a>
        </NavDropdown>
      </Nav>
    </Navbar>
  </Navbar>
</div>

      <article className="Container" style={{ marginTop: 13 }}>

        {/* Contador de intentos */}
        
        <h1 style={{ color: 'white', backgroundColor: "black", zIndex: 3}}>Votación </h1>
        <h4 style={{ color: 'white',marginTop: 35 }}> {usuarioNombre.toUpperCase()} </h4>
        {plata} 
              {/* ... tu código existente ... */}

              <div style={{ position: "relative" }}>
  {isCountdownActive && (
    <div style={{ position: "absolute", top: "-3rem", left: "50%", transform: "translate(-50%, -50%)", zIndex: 999 }}>
      <img
        src={eightPointsImage}
        alt="Loading..."
        style={{ width: "200px", height: "200px" }}
      />
    </div>
  )}

  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    {isCountdownActive ? (
      <p style={{ color: "white", marginTop: "20px" }}> {countdown}</p>
    ) : (
      <h3
        onClick={() => setIsCountdownActive(true)}
        className="nav-link h5 text-center"
        style={{
          color: "white",
          backgroundColor: "blue",
          marginTop: "10px",
          width: "100%",
        }}
      >
        Enviar Puntuación
      </h3>
    )}
  </div>
</div>
   
      {/* ... tu código existente ... */}
  
        {/* Mostrar las combinaciones de "usuario + puntuación" de todos los usuarios */}

        <div style={{ color: 'white', backgroundColor: 'red' }}>
  {Object.keys(usuarioPuntuacion).length > 0 ? (
    Object.keys(usuarioPuntuacion).map((key) => (
      <h4 key={key} style={{ marginTop: 0 }}>{`${key} ${usuarioPuntuacion[key]}`}</h4>
    ))
  ) : (
    <h4 style={{ marginTop: 0 }}>{usuarioNombre}</h4>
  )}
</div>

        <h4 style={
            {backgroundColor: '#17a2b8', width: '-webkit-fill-available', marginBottom: '0.5rem',color:'white'}
        } onClick={borrarPuntuacion}>Borrar Puntuación</h4>
  
        {/* Botones de letras */}
        {/* ... */}
        {/* Palabra oculta */}
        {/* ... */}
        <a className="nav-link h5 text-center" style={{ color: "white", backgroundColor: "black" }} onClick={cerrarSesion}>Cerrar Sesión</a>
      </article>
      <Banner/>
    </>
  )
};