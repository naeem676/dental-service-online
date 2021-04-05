import React, { useContext, useState } from 'react';
import group from "../../images/Group 140.png";
import TextField from '@material-ui/core/TextField';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import Link from '@material-ui/core/Link';
import { firebaseConfig } from './firebaseConfig';
import { UserContext } from '../../App';



if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}



const Login = () => {
    const [loggInUser, setLoggInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email:'',
        password:'',
        confirm: '',
        error:''
    });

    const history = useHistory();
    const location = useLocation();
   
  
    const { from } = location.state || { from: { pathname: "/" } };

    const handleBlur = (e) => {
 
        let fieldValidation = true;
        
        if (e.target.name === "email") {
            fieldValidation = /\S+@\S+\.\S+/.test(e.target.value);
      
        }
        if (e.target.name === "password") {
            fieldValidation = /^(?=.*\d)[a-zA-Z0-9]{7,}$/.test(e.target.value);
            
        }
        if (e.target.name === "name") {
            fieldValidation = e.target.value;
 
            
        }
        
        if (e.target.name === "confirm") {
            fieldValidation = e.target.value;
            
        }
        if(e.target.value !== user.password){
            
            setUser({confirm:e.target.value})
        }

        
        if(fieldValidation){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        
        }
    
    }

    
    const handleSubmit= (e)=> {

        if(newUser && user.email && user.password){
            if(user.password !== user.confirm){
                alert("The passwords doesn't match")
                return false;
            }
            
            
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    
                    
                    const newUserInfo = {...user};
                   
                    
                    newUserInfo.error = '';
                    
                    setUser(newUserInfo);
                    updateName(user.name);
                    history.replace(from);
                    
   
                })
                .catch((error) => {
                    const newUserInfo = {...user}
                    newUserInfo.error = error.message;
                    
                    setUser(newUserInfo)
    
                });
        }
        if(user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    
                    
                    const newUserInfo = {...user};
                    
                    newUserInfo.error = '';
                    
                    setUser(newUserInfo)
                    setLoggInUser(newUserInfo);
                    userToken();
                    
                   
                })
                .catch((error) => {
                    const newUserInfo = {...user}
                    newUserInfo.error = error.message;
                    
                    setUser(newUserInfo);
                    setLoggInUser(newUserInfo);
                });
        }
      
         e.preventDefault()
    }

    const updateName =(name)=>{
        var user = firebase.auth().currentUser;

        user.updateProfile({
        displayName:name
        }).then(function() {

        }).catch(function(error) {
        // An error happened.
        });

    }

    const userToken = ()=>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
           sessionStorage.setItem('token', idToken)
           history.replace(from);
          }).catch(function(error) {
            // Handle error
          });
          
    }

    
    return (
        <div className="login">
        <div className="login-first">

        <div className="form">
        <form onSubmit={handleSubmit}>
        {newUser && <TextField id="name" name="name" onBlur={handleBlur} type="text" label="name" />}<br/>
        <TextField id="email" name="email" onBlur={handleBlur} type="email" label="email" /><br/>
        <TextField id="password" name="password" onBlur={handleBlur} type="password" label="password" /><br/>
        {newUser && <TextField id="confirm" name="confirm" onBlur={handleBlur} type="password" label="confirm" />}<br/>
        <button className="login-btn" type="submit">{newUser ? "Sign up" : "Sign in"}</button>
        {newUser ? <p>Already have an account? <Link component="button" variant="body2" onClick={()=> setNewUser(false)}>  Sign in </Link></p> : <p>Create a new account? <Link component="button" variant="body2" onClick={()=> setNewUser(true)}> Sign up </Link></p>}
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