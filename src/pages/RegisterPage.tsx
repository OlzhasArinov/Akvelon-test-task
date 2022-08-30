import { SignUp } from '../components/SignUp';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div className='login-box'>
            <h2>Register</h2>
            <SignUp />
            <p className='text-white'>
                Already have an account? <Link className='p-1' to="/login">Sign in</Link>   
            </p>            
        </div>
    )
}

export default RegisterPage
