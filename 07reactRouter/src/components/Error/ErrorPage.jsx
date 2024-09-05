import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {

  const error = useRouteError()
  console.error(error)

  return (
    <div className='flex flex-col justify-center items-center h-screen text-center'>
        <img src="https://static.vecteezy.com/system/resources/previews/020/717/882/original/error-icon-in-the-form-of-pixel-graphics-error-means-that-this-site-is-unavailable-cant-be-opened-vector.jpg" 
        className='h-20'
        alt="error" />
        <h1 className='py-8 text-3xl'>oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
    </div>
  )
}

export default ErrorPage