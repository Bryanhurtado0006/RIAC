import { useState } from "react";
import "./App.css"


const Formulario:React.FC=()=>{
    
    const [nombre,setNombre]=useState("");
    const [correo,setEmail]=useState("");
    const [contraseña,setContrasena]=useState("");

    const enviar=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        alert(  `NOMBRE: ${nombre}
                EMAIL: ${correo}
                PASSWORD: ${contraseña}`);

    }
    return(
        <div >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyvAQu57cDeHp2H6h0sPokbJgJVKb8YeSeg&s" alt="" />
            <form onSubmit={enviar}> 
                <label>  NAME <input type="text" placeholder="name" className="name" onChange={(event)=>{setNombre(event.target.value)}}/></label>
                
                <label> EMAIL  </label>
                <input type="Email" className="ema" placeholder="email " onChange={(event)=>{setEmail(event.target.value)}} />

                <label >  PASSWORD </label>
                <input type="Password" className="pass" placeholder="password" onChange={(event)=>{setContrasena(event.target.value)}} />


                <button className="butn" type="submit"> ACEPTAR</button>
            </form>
        
        </div>
    )

}

export default Formulario;