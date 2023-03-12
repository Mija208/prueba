import { useEffect, useState } from "react";
import "./App.css";
import Buscador from "./Components/Buscador";
// import Formulario from "./Components/Formulario";
import MiApi from "./Components/MiApi";
import { colaboradores } from "./db";
const Api = "https://jsonplaceholder.typicode.com/users";



function App() {
  const [usuarios, setUsuarios] = useState([]);
  const[buscador, setBuscador] = useState ('');
  useEffect( ()=>{
  getUsers();
  }, []);

const getUsers = async()=>{
  const response = await fetch(Api);
  const data = await response.json();
  setUsuarios(data);
}

  return (
    <div className='container'>
   <h1 className="text-center">Base de datos</h1>
      {/* <Formulario usuarios={usuarios} setUsuarios={setUsuarios}/> */}
      <hr />
      <Buscador buscador={buscador} setBuscador={setBuscador}/>
      <MiApi usuarios={usuarios} buscador={buscador} />
       
    </div>
  )
}

export default App
