import React, {useState, useEffect} from "react";
import {HangImage} from './HangImage';
import io from 'socket.io-client';
const socket = io('http://localhost:4000');

export const Login = () => {

    const [miLogin, setMiLogin] = useState("false");
    const [usu,setUsu] = useState("");
    const [pas,setPas] = useState("");
  
    // mantener el login dsp de actualizar

    useEffect (()=>{
        const usuario = localStorage.getItem ("cuenta")
        console.log(usuario)
        if( usuario 

        ){
            setMiLogin("true")
            document.getElementById("form_login").style.display = "none";
        }

    },[])
     
    function iniciarSesion(e){
        e.preventDefault();
        var txtusu = document.getElementById("txtusu").value;
        var txtpas = document.getElementById("txtpas").value;
        if (txtusu.length===0 || txtpas.length===0){
            alert("Complete los datos faltantes!!");
        }else{
            if(usu === "David" && pas==="nn3003"){
                setMiLogin("true");
                document.getElementById("form_login").style.display = "none";
                let ac ={usu,pas}
                let cuenta = JSON.stringify(ac);
                localStorage.setItem('cuenta',cuenta);   
                
            } else

                if(usu === "Facundo" && pas==="nn3003"){
                    setMiLogin("true");
                    document.getElementById("form_login").style.display = "none";
                    let ac ={usu,pas}
                    let cuenta = JSON.stringify(ac);
                    localStorage.setItem('cuenta',cuenta);     
                } else

                if(usu === "Juanma" && pas==="nn3003"){
                    setMiLogin("true");
                    document.getElementById("form_login").style.display = "none";
                    let ac ={usu,pas}
                    let cuenta = JSON.stringify(ac);
                    localStorage.setItem('cuenta',cuenta);     
                } else

                if(usu === "Araceli" && pas==="nn3003"){
                    setMiLogin("true");
                    document.getElementById("form_login").style.display = "none";
                    let ac ={usu,pas}
                    let cuenta = JSON.stringify(ac);
                    localStorage.setItem('cuenta',cuenta);     
                } else

                if(usu === "Patricio" && pas==="nn3003"){
                    setMiLogin("true");
                    document.getElementById("form_login").style.display = "none";
                    let ac ={usu,pas}
                    let cuenta = JSON.stringify(ac);
                    localStorage.setItem('cuenta',cuenta);     
                } else

                if(usu === "Danilo" && pas==="nn3003"){
                    setMiLogin("true");
                    document.getElementById("form_login").style.display = "none";
                    let ac ={usu,pas}
                    let cuenta = JSON.stringify(ac);
                    localStorage.setItem('cuenta',cuenta);     
                } else

                if(usu === "Maru" && pas==="nn3003"){
                    setMiLogin("true");
                    document.getElementById("form_login").style.display = "none";
                    let ac ={usu,pas}
                    let cuenta = JSON.stringify(ac);
                    localStorage.setItem('cuenta',cuenta);     
                } else

                if(usu === "Gonzalo" && pas==="nn3003"){
                    setMiLogin("true");
                    document.getElementById("form_login").style.display = "none";
                    let ac ={usu,pas}
                    let cuenta = JSON.stringify(ac);
                    localStorage.setItem('cuenta',cuenta);     
                } else

                if(usu === "Leandro" && pas==="nn3003"){
                    setMiLogin("true");
                    document.getElementById("form_login").style.display = "none";
                    let ac ={usu,pas}
                    let cuenta = JSON.stringify(ac);
                    localStorage.setItem('cuenta',cuenta);     
                } else

                if(usu === "Matias" && pas==="nn3003"){
                    setMiLogin("true");
                    document.getElementById("form_login").style.display = "none";
                    let ac ={usu,pas}
                    let cuenta = JSON.stringify(ac);
                    localStorage.setItem('cuenta',cuenta);     
                } else

                if(usu === "Josefina" && pas==="nn3003"){
                    setMiLogin("true");
                    document.getElementById("form_login").style.display = "none";
                    let ac ={usu,pas}
                    let cuenta = JSON.stringify(ac);
                    localStorage.setItem('cuenta',cuenta);     
                } else

                if(usu === "Nicolas" && pas==="nn3003"){
                    setMiLogin("true");
                    document.getElementById("form_login").style.display = "none";
                    let ac ={usu,pas}
                    let cuenta = JSON.stringify(ac);
                    localStorage.setItem('cuenta',cuenta);     
                } else

                if(usu === "Franco" && pas==="nn3003"){
                    setMiLogin("true");
                    document.getElementById("form_login").style.display = "none";
                    let ac ={usu,pas}
                    let cuenta = JSON.stringify(ac);
                    localStorage.setItem('cuenta',cuenta);     
                } else

                if(usu === "Joaquin" && pas==="nn3003"){
                    setMiLogin("true");
                    document.getElementById("form_login").style.display = "none";
                    let ac ={usu,pas}
                    let cuenta = JSON.stringify(ac);
                    localStorage.setItem('cuenta',cuenta);     
                } else

                if(usu === "Delfina" && pas==="nn3003"){
                    setMiLogin("true");
                    document.getElementById("form_login").style.display = "none";
                    let ac ={usu,pas}
                    let cuenta = JSON.stringify(ac);
                    localStorage.setItem('cuenta',cuenta);     
                } else

                if(usu === "Alejandra" && pas==="nn3003"){
                    setMiLogin("true");
                    document.getElementById("form_login").style.display = "none";
                    let ac ={usu,pas}
                    let cuenta = JSON.stringify(ac);
                    localStorage.setItem('cuenta',cuenta);     
                } 

            else {
                setMiLogin("false");
                alert("Error De Usuario y/o contraseña");
                document.getElementById("txtusu").value = "";
                document.getElementById("txtpas").value = "";
                document.getElementById("txtusu").focus();
            }
// ver como hacer para que traiga la lista de usuarios
            socket.emit('usuario', usu)  
            console.log(usu)

        }
        }
    
    return (

        <div className="container">
        
        <form id="form_login" style={{background:"lightgray", marginTop:20, padding:20}}>
            <div>
                <h1 style={{color:"blue", textalign:"center"}}>LOGIN</h1>
                <label htmlFor="txtusu"><strong>   Nombre:   </strong></label>
                <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control" onChange={(e)=>setUsu(e.target.value)}   required/>
            </div>
            <div>
                <label htmlFor="txtpas"><strong> Clave: </strong></label>
                <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control" onChange={(e)=>setPas(e.target.value)}  required/>
            </div><br/>
            <input type="submit" className="btn btn-primary" value="Login" onClick={ iniciarSesion }/>
           
        </form>

        {miLogin === "true" && <HangImage usu={usu}/>}

    </div>
    )
}