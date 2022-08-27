import React from 'react'
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import User from '../components/User';
import { useUsers } from '../hooks/users';

function UsersPage() {
    const {users, error, loading} = useUsers()
  
    return (
      <div className='container mx-auto max-w-2xl pt-5'>
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        <div className='border py-2 px-4 rounded flex justify-center items-center flex-wrap mb-2'>
          {users.map(user => <User user={user} key={user.id} />)}
        </div>
      </div>
    );
}

export default UsersPage