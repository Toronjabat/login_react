import dolar from '../assets/1pts.png'
import euro from '../assets/2pts.png';
import black from '../assets/3pts.png';
import peronio from '../assets/5pts.png';
import peso from '../assets/8pts.png';
import { letters } from '../helpers/letters';

import { useState } from 'react';

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

export function HangImage () {
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
            {width: 120, right: 50,left: 30, margin: 100}
        } 
        />)

}
return (
    <>
              {/* Contador de intentos */}
              <h3>Votos: </h3>
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
 <h3>_ _ _ _ _ _ _ _ _ _ _</h3>

    </>
)

}; 