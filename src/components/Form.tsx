import {FC, useState} from 'react';

interface FormProps {
    title: string;
    handleClick: (email: string, pass: string) => void;
}

const Form: FC<FormProps> = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    return (
        // <div>
            <form>
                <div className="user-box">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name=''
                        required
                    />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        required
                    />
                    <label>Password</label>
                </div>
                <a href="#" onClick={() => handleClick(email, pass)}>
                    <span />
                    <span />
                    <span />
                    <span />
                        {title}
                </a>
            </form>

        //     {/* <input
        //         type="email"
        //         value={email}
        //         onChange={(e) => setEmail(e.target.value)}
        //         placeholder="email"
        //     />
        //     <input
        //         type="password"
        //         value={pass}
        //         onChange={(e) => setPass(e.target.value)}
        //         placeholder="password"
        //     />
        //     <button
        //         onClick={() => handleClick(email, pass)}
        //     >
        //         {title}
        //     </button>
        // </div> */}
    )
}

export {Form}
