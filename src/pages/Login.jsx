import React from 'react'
import FormSignIn from './FormSignIn'


export default function Login() {
  return (
    <div className='grow m-8 p-5 bg-cover' style={{ backgroundImage: `url(../img/backgroundSign.jpg)` }}>
      <h1 className='text-black text-[40px] flex justify-center items-center'>
        My Tinerary
        <FormSignIn />
        
      </h1>
    </div>
  )
}
