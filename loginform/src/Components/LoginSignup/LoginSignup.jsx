import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = ()  => {
     const [action , setAction] = useState("Login")
      
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="user_icon"/>
                <input type="text" autoComplete='off' placeholder='Name'/>
                </div>}
            

                <div className="input">
                <img src={email_icon} alt="email_icon"/>
                <input type="email" autoComplete='off' placeholder='Email Id'/>
                </div>

                <div className="input">
                <img src={password_icon} alt="password"/>
                <input type="password" autoComplete='off' placeholder='Password'/>
            </div>
            {action==="Sign Up" ? <div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
            <div className="submit-container">
                <div className={action==="Login"?"submit gray": "submit"} onClick={() =>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray": "submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
      
    </div>
    
  )}
    
  

export default LoginSignup
