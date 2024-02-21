import React from 'react'
import Error from '../../assets/Error.jpeg'

const ErrorPage = () => {
  return (
    <div className='mt-5'>
        <h1>SORRY PAGE NOT FOUND</h1>
        <img  src={Error} alt="errorimage" width={500}></img>
      
    </div>
  )
}

export default ErrorPage
