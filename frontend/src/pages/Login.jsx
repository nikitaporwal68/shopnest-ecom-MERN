import { useContext, useState } from "react"
import React from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import '../styles/auth.css'

const Login = ()=> {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {login} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const res = await fetch('api/auth/login',{
                method : 'POST',
                headers : {'Content-type' : 'application/json'},
                body : JSON.stringify({email,password})
            });
            const data = await res.json();
            if(res.ok){
                login(data);
                navigate('/');
            }else{
                alert(data.message);
            }
        }catch(err){
            console.error(err);
        }
    }

    return(
            <div className="auth-container" >
                <form onSubmit={handleSubmit} className="auth-form" >
                    <h2>Login</h2>
                    <input type="email" placeholder="Email" value={email} onChange=
                        {(e) => setEmail(e.target.value)}  required ></input>
                    <input type="password" placeholder="Password" value={password} onChange=
                        {(e) => setPassword(e.target.value)} required></input>
                    <button type="submit"  className="btn">Login</button>
                    <p>Don't have an account? <Link to="/register" >Register</Link>  </p>
                </form>
            </div>
    )
}
export default Login;