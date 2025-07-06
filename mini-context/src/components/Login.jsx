import React, { useState } from 'react'
import { useContext } from 'react'
import userContext from '../context/UserContext'

function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword]= useState('')
    const {setUser}= useContext(userContext)
    const hSubmit =(e)=>{
        e.preventDefault()
        setUser({username,password})

    }
  return (
    <div>
        <h2>Login</h2>
        
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} name="" placeholder='username' id="" /> {"    "}
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="" placeholder='password' id="" />
        <button onClick={hSubmit}>Submit</button>

    </div>
  )
}

export default Login