import React, { useState } from "react";
import  "./Css.css";
import { FaUser, FaLock } from "react-icons/fa";
const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setPassword('');
        setEmail(' ');
        setUsername('');
    };
    
    return (
        <div className="Sid">
        <div className="Signupbox">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="inputbox">
                    <input type="text" required placeholder="UserName" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="inputbox">
                    <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="inputbox">
                    <input type="password" required placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="inputbox">
                    <input type="password" required placeholder="Confirm Password" />
                </div>
                <button className="submit" type="submit">Register</button>
                <div className='already'>
                    <h2>Already have an account? <a>Sign in</a></h2>
                </div>
            </form>
        </div>
        </div>
    );
};
export default Signup;