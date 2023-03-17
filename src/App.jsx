import { useEffect, useState } from "react";
import "./App.css";
import Buscador from "./Components/Buscador";
// import Formulario from "./Components/Formulario";
import MiApi from "./Components/MiApi";
// import { colaboradores } from "./db";
const urlApi = "https://rickandmortyapi.com/api/character";



function App() {
  const [usuarios, setUsuarios] = useState([]);
  const[buscador, setBuscador] = useState ('');
  useEffect( ()=>{
  getUsers();
  }, []);

const getUsers = async()=>{
  const response = await fetch(urlApi);
  const data = await response.json();
  setUsuarios(data);
  
}

  return (
    <div className='container'>
   <h1 className="text-center">Las Amarillas</h1>
      {/* <Formulario usuarios={usuarios} setUsuarios={setUsuarios}/> */}
      <hr />
      <Buscador buscador={buscador} setBuscador={setBuscador}/>
      <MiApi usuarios={usuarios} buscador={buscador} />
      
      
    </div>
  )
}

export default App
