import React, {useState} from "react"
import {HangImage} from './HangImage'

export const Login = () => {

    const [miLogin, setMiLogin] = useState("false");
    const [usu,setUsu] = useState("");
    const [pas,setPas] = useState("");

    function iniciarSesion(e){
        e.preventDefault();
        var txtusu = document.getElementById("txtusu").value;
        var txtpas = document.getElementById("txtpas").value;
        if (txtusu.length===0 || txtpas.length===0){
            alert("Complete los datos faltantes!!");
        }else{
            if(usu === "admin" && pas==="123"){
                setMiLogin("true");
                document.getElementById("form_login").style.display = "none";
                let ac ={usu,pas}
                let cuenta = JSON.stringify(ac);
                localStorage.setItem('cuenta',cuenta);
                                
            } else {
                setMiLogin("false");
                alert("Error De Usuario y/o contraseña");
                document.getElementById("txtusu").value = "";
                document.getElementById("txtpas").value = "";
                document.getElementById("txtusu").focus();
            }
            if(setMiLogin = true) {


            }
        }
        }
    
    return (

        <div className="container">
        
        <form id="form_login" style={{background:"lightgray", marginTop:20, padding:20}}>
            <div>
                <h1 style={{color:"blue", textalign:"center"}}>LOGINAZO</h1>
                <label htmlFor="txtusu"><strong>   El user hno..!!   </strong></label>
                <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control" onChange={(e)=>setUsu(e.target.value)}   required/>
            </div>
            <div>
                <label htmlFor="txtpas"><strong>La clave kpo!! </strong></label>
                <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control" onChange={(e)=>setPas(e.target.value)}  required/>
            </div><br/>
            <input type="submit" className="btn btn-primary" value="Login" onClick={ iniciarSesion }/>
        </form>

        {miLogin === "true" && <HangImage usu={usu}/>}

    </div>
    )
}