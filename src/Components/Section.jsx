import React from 'react'

const Section = () => {
  return (
    <div className='container'>
      <section className="container bg-black py-2" >
         <div>
          <h2 className='text-center text-white my-3'>Recibe información en tu correo</h2>
          <form>
             <div className="mb-3">
                <input type="Email" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" />
             </div>
             <div className="mb-3">
                <input type="Email" className="form-control" id="exampleInputPassword1" placeholder="Correo electrónico"/>
             </div>
             <div className="text-center">
                <button type="submit" class="btn btn-light">Enviar</button>
             </div>
            </form>   
         </div>
      </section>
    </div>
  )
}

export default Section
