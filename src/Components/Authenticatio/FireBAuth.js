import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import {auth} from "../../firebase"
const FireBAuth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = async (e) => {
        e.preventDefault()
        await createUserWithEmailAndPassword(auth, email, password).then(
            setEmail(""),
            setPassword("")
            
        )
        
    }


  return (
    <div>

        <input placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
        <input placeholder="Password" value={password} type="password" onChange={(event) => setPassword(event.target.value)}></input>
        <button onClick={signIn}>Sign in</button>

    </div>
  )
}

export default FireBAuth