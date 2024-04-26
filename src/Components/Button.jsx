import React from 'react'

export default function Button({onclick}) {
  return (
    <div className='flex justify-center items-center'>
        <button onClick={onclick} className='p-2 border rounded-sm text-white bg-slate-700 shadow-yellow-400'>Post</button>
    </div>
  )
}
