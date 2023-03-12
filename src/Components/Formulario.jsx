import React, { useState } from 'react'
import Erorr from './Erorr';
import {getId} from '../helpers/getId'

const Formulario = ({usuarios, setUsuarios}) => {
const [name, setName] = useState("");
const [email, setEmail] = useState(""); 
const [error, setError] = useState(false);

const handleSubmit = e=>{
    e.preventDefault();

//validamos los datos
if([name, email].includes('')){
    
    setError(true)
    return;
}

setError(false);

//los guardo como objeto
const objetoUsuario = {
    name,
    email,
    id: getId(),
};

//Guarda los valores
setUsuarios([...usuarios, objetoUsuario])

//setear los input
setName('')
setEmail('')

};
  return (
    <div>
      <h2>Agregar Usuarios</h2>


<form onSubmit={handleSubmit}> 
  {error && <Erorr message='Debes llenar todos los datos'/> }
    <div className='mb-4'>
        <label htmlFor="name">Nombre:</label>
        <input className='form-control w-50' id="name" type="text" value={name} onChange={e=>setName(e.target.value)} />
        
    </div>
    <div className='mb-4'>
        <label htmlFor="email">Correo Electrónico:</label>
        <input className='form-control w-50' id="email" type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
    </div>
    <button className='btn btn-light text-black'>Agregar usuario</button>
</form>
    </div>
  )
}

export default Formulario
