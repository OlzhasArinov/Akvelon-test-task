import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import User from '../components/User';
import { useAppDispatch } from '../hooks/redux-hooks';
import { useAuth } from '../hooks/use-auth';
import { useUsers } from '../hooks/users';
import { removeUser } from '../store/slices/userSlice';

function UsersPage() {
    const {users, error, loading} = useUsers()

    function Redirect({ to }:any) {
        let navigate = useNavigate();
        useEffect(() => {
          navigate(to);
        });
        return null;
      }
    const dispatch = useAppDispatch();

    const {isAuth, email} = useAuth();

    return isAuth ? (
        <>
            <nav className='h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white'>
                <span className='font-bold'>React 2022</span>

                <span>
                    <Link to='/' className='mr-2'>Users</Link>
                    <Link to='/user'>User</Link>
                </span>
            </nav>
            <div className='container mx-auto max-w-2xl pt-5'>
            <button
                onClick={()=> dispatch(removeUser())}
            >Log out from {email}</button>

                {loading && <Loader />}
                {error && <ErrorMessage error={error} />}
                <div className='border py-2 px-4 rounded flex justify-center items-center flex-wrap mb-2'>
                {users.map(user => <User user={user} key={user.id} />)}
                </div>
            </div>
        </>
    ) : (
        <Redirect to="/login" />
    )
}

export default UsersPage