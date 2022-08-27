import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className='h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white'>
        <span className='font-bold'>React 2022</span>

        <span>
            <Link to='/' className='mr-2'>Users</Link>
            <Link to='/user'>User</Link>
        </span>
    </nav>
  )
}

export default Navigation