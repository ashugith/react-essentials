import React from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = ()  => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="user_icon"/>
                <input type="text"/>
                </div>

                <div className="input">
                <img src={email_icon} alt="email_icon"/>
                <input type="email"/>
                </div>

                <div className="input">
                <img src={password_icon} alt="password_icon"/>
                <input type="password"/>
            </div>
        </div>
      
    </div>
    
  )}
    
  

export default LoginSignup
