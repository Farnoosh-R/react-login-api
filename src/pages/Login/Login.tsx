import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState("emilys")
    const [password, setPassword] = useState("emilyspass")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await dispatch(login({username, password}) as any)
        if (login.fulfilled.match(result)){
            navigate("/dashboard")
        }else {
            alert("login failed")
        }
    }

    return(
        <>
        <h1>login page</h1>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" value={username}/>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" value={password}/>
            <button type="submit">login</button>
        </form>
        </>
    )
}
export default Login;