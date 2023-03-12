import React from 'react'

const Erorr = ({message}) => {
  return (
    <div>
      <p className='bg-warning text-white text-center p-3 w-50 text-uppercase rounded font-bold'>{message}</p>
    </div>
  )
}

export default Erorr
