import React from 'react'

const Buscador = ({buscador, setBuscador}) => {
    
  return (
    <div>
      <h2>Buscador</h2>
      <input type="text" placeholder='Buscar' value={buscador} onChange={(e)=>setBuscador(e.target.value)} />
    </div>
  )
}

export default Buscador
