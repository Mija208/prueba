import React, { useState } from 'react'
import Footer from './Footer'
import Section from './Section'
import TableRow from './TableRow' 

const MiApi = ({usuarios, buscador}) => {
  const [ordenar, setOrdenar] = useState ('')
let results = []
  if(!buscador){
  results = usuarios
  }else{
    results = usuarios.filter((user) =>
    user.name.toLowerCase().includes(buscador.toLowerCase()) ||
    user.species.toLowerCase().includes(buscador.toLowerCase())
    );
  }

  const ordenMayor = (data)=>{
    results = data.sort((a, b)=> a.name.localeCompare(b.name))
  }
    const ordenMenor = (data)=>{
      results = data.sort((a, b)=> b.name.localeCompare(a.name))
  }

 ordenar == 'menor' && ordenMenor (usuarios)
 ordenar == 'mayor' && ordenMayor (usuarios)

return (
    <div>
      {/* <div>
        <h2>Busqueda de Usuarios</h2>
        <input className='form control w-50' type="text" placeholder='buscar...' value={palabra} onChange={(e) => setPalabra(e.target.value)} />
      </div> */}
      <h2 className="mb-4">Personajes</h2>
      <select className="form-select form-select-lg mb-4" aria-label="Default select example" value={"default"} onChange={e=>setOrdenar(e.target.value)}>
        <option value="default">-- Ordenar por --</option>
        <option value="mayor">Número 9 - 0</option>
        <option value="menor">Número 0 - 9</option>
      </select>

      <table className="table table-striped table-hover mt-shadow-lg">
        <thead className="bg-dark text-white">
          <tr>
            <th>Nombre</th>
            <th>Especie</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 ? (
            results.map((user) => <TableRow key={user.id} user={user} />)
          ) : (
            <tr>
              <td>No hay resultados</td>
            </tr>
          )}
        </tbody>
      </table>
      <Section/>
      <Footer/>
    </div>
  );
          }        

export default MiApi
