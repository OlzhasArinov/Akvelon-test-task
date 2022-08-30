import { Login } from '../components/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className='login-box'>
            <h2>Login</h2>
            <Login />
            <p className='text-white'>
                Or <Link className='p-1' to="/register">register</Link>
            </p>
        </div>
    )
}

export default LoginPage
