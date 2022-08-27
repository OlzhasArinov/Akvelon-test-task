import React from 'react'
import { Link } from 'react-router-dom'
import { IUser } from '../models'

interface UserProps {
    user: IUser
}

function User({user}: UserProps) {
  return (
    <div className='border py-2 px-4 rounded mb-2 inline-block w-[50%]'>
        <img src={user.avatar} alt={user.first_name} className='max-w-[100%]' />
        <p>{user.first_name} {user.last_name}</p>
        <p className='font-bold mb-4'>{user.email}</p>
        <Link to='/user' className='py-2 px-4 border rounded-md bg-blue-400'>View details</Link>
    </div>
  )
}

export default User