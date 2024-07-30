import React from 'react'

export default function Card({title, desc, delete2, index}) {
  return (
    <div className='d-flex flex-row align-items-center gap-3'>
        <div>{title}</div>
        <div>{desc}</div>
        <div>
            <button onClick={()=>{delete2(index)}}><i class="bi bi-trash"></i></button>
        </div>
    </div>
  )
}
