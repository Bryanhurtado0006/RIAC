
import "./Stile.css"
const ClikDatos:React.FC=()=>{
const Hacercli=()=>{
    alert("estoy cagando")
    console.log("esta ocupado deja cagar");
}

    return(
<div>
    <button className="Holaperros"  onClick={Hacercli} > Abre </button>
</div>

        
    )
}
export default ClikDatos;