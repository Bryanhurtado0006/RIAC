const Change:React.FC=()=>{
    let nombre1:string="";
    let apellido1:string="";
    const botnClick=()=>{
     alert(`${nombre1}  ${apellido1}  Este es mi nombre `)
    }
    const nombre=(nombre2:string)=>{
        nombre1=nombre2
        console.log(nombre2)
    }
    const apellid=(apellido:string)=>{
        apellido1=apellido
        console.log(apellido)
    }
return(
    <div>
        <input type="text" onChange={(event)=>nombre(event.target.value)} placeholder="escriba aqui" ></input>
        <input type="text" onChange={(event)=>apellid(event.target.value)} placeholder="escriba aqui"  ></input>
        <button className="chupa" onClick={botnClick} > dale cliiii</button>
        
        
        </div>
)
}

export default Change;