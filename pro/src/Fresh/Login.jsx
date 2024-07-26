import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";
import icon1 from"./Assests/IconsLogin/mail.svg";
import icon2 from"./Assests/IconsLogin/password.svg";


const LoginForm=()=>{
    const[email,setEmail]= useState('');
    const[password,setPassword]=useState('');
    const handleSubmit=(event)=>{
        event.preventDefault();
        setPassword('');
        setEmail('');
    };
    return(
        <div className="outer">
            <div className='Loginbox' onSubmit={handleSubmit}> 
            <button class="close-button">&#10006;</button>
                 <div className="loginh1">
                <h1>Login From here</h1>
                <p>Login in to continue your account <br/> and explore new jobs</p>
                </div>
                <div class="line"></div>
                <div className="lgfbutton">
                <button className="lkd">
                <FaUser className="icon"/>  Log in With Linkedin
                </button>
                <button className="gl">
                <FaUser className="icon" /> Log in With Google
                 </button>
                <button className="fb"> 
                <FaUser className="icon" /> Log in With Facebook
                </button> 
                </div>
                <div class="line"></div>
                <div className="inputbox1">
                <label>E-mail</label>
                    <input type="email" placeholder="example@gmail.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <icon1 />
                </div>
                <div className="inputbox2">
                <label>Password</label>
                    <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    
                </div>
                <div className="forget">    
                    <label><input type='checkbox' /> Remember me</label>
                    <a href="recover">Forget password</a>
                </div>
                <div className="submitb" ><button className="submit" type="submit">Login</button></div>
                <div className="signup">
                    <p>Don't have an account? <a>Create a free account</a></p>
                </div>
            </div>
            </div>
    );
}
export default LoginForm;