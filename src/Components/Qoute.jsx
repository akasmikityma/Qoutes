import React from 'react'

export default function Qoute({text,author}) {
    console.log("thisis the qpure jsx")
  return (
    <div className='border flex flex-col sm-w-full rounded-md p-3 shadow bg-yellow-200 text-black hover:bg-red-300'>
        <h1>{`- ${author}`}</h1>
        <h3>{text}</h3>
    </div> 

  )
}
