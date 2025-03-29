import "./Stile.css"

const Clik:React.FC=()=>{
    const nombree:string="Victor";
    const hacerClik=(name:string)=>{
        alert(`${name} Le diste clik bro`)
        console.log("boton clikeado")
    }


    return(

<div>
    <button className="botonclik" onClick={()=>hacerClik(nombree)}> dale clik mamawuevo</button>
</div>

    )
}
export default Clik;