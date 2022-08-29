import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import Navigation from '../components/Navigation';
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
            <Navigation />
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