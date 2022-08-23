import React ,{useState} from "react";

function BuscarAmigo(){
const[initial , setInitial] = useState("sin asignar amigo secreto")

return (
<div>
<h1> Amigo Secreto</h1>
<div>
  <h3>Tu amigo secreto es : {initial} </h3>
  <button onClick = { () => setInitial("lucas")}> Buscar Amigo Secreto</button>
</div>

</div>


)

}
export default BuscarAmigo