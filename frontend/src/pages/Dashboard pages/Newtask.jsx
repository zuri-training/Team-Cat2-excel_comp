import React from 'react'
import { Outlet } from 'react-router-dom'

const Newtask = () => {
  return (
    <div className='w-full'>
      <Outlet/>
    </div>
  )
}

export default Newtask
