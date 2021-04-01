import React from 'react';
import group from "../../images/Group 140.png";
import TextField from '@material-ui/core/TextField';
import './Login.css';

const Login = () => {
    
    return (
        <div className="login">
        <div className="login-first">

        <div className="form">
        <form onSubmit="">
        <TextField id="email" name="email" type="email" label="email" /><br/>
        <TextField id="password" name="password" type="password" label="password" /><br/>
        <button className="login-btn" type="submit">Sign in</button>

        </form>

        </div>

        </div>
        <div className="login-second">
            <img className="group-img" src={group} alt="" srcset=""/>
        </div>
        
        </div>
    );
};

export default Login;