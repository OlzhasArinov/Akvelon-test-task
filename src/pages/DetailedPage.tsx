import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { useAuth } from '../hooks/use-auth';
import { fetchUser } from '../store/slices/userDetailedSlice';
import { removeUser } from '../store/slices/userSlice';

function DetailedPage() {
    const params = useParams<'id'>()
    const dispatch = useAppDispatch()
    const {loading, userDetail, error} = useAppSelector(state => state.userDetailReducer)
      
    useEffect(() => {
        dispatch(fetchUser(params.id!))
    }, [dispatch, params.id])
   
    function Redirect({ to }:any) {
        let navigate = useNavigate();
        useEffect(() => {
          navigate(to);
        });
        return null;
      }

    const {isAuth, email} = useAuth();

    return isAuth ? (
        <>
            <nav className='h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white'>
                <Link to='/' className='font-bold'>Akvelon</Link>

                <span>
                    <button
                        onClick={()=> dispatch(removeUser())}
                    >
                        Log out from {email}
                    </button>
                </span>
            </nav>
            <div className='container mx-auto max-w-2xl pt-5 text-white'>

                {loading && <Loader />}
                {error && <ErrorMessage error={error} />}
                <div className='border py-2 px-4 rounded flex flex-col justify-center items-center flex-wrap mb-2'>
                    <img src={userDetail?.avatar} alt=""/>
                    <h1>{userDetail?.first_name} {userDetail?.last_name}</h1>
                    <p>{userDetail?.email}</p>
                </div>
            </div>
        </>
    ) : (
        <Redirect to="/login" />
    )
}

export default DetailedPage