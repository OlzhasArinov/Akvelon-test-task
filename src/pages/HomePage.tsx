import {useNavigate} from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import {removeUser} from '../store/slices/userSlice'
import { useAppDispatch } from '../hooks/redux-hooks';
import { useEffect } from 'react';

const HomePage = () => {
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
        <div>
            <h1>Welcome</h1>

            <button
                onClick={()=> dispatch(removeUser())}
            >Log out from {email}</button>
        </div>
    ) : (
        <Redirect to="/login" />
    )
}

export default HomePage
