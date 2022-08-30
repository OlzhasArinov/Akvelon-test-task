import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

function DetailedPage() {
  return (
    <>
        <nav className='h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white'>
            <span className='font-bold'>React 2022</span>

            <span>
                <Link to='/' className='mr-2'>Users</Link>
                <Link to='/user'>User</Link>
            </span>
        </nav>
        <div className='container mx-auto max-w-2xl pt-5'>
            Details
        </div>
    </>
  )
}

export default DetailedPage