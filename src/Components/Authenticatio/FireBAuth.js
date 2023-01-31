import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import {auth} from "../../firebase"
const FireBAuth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
    }


  return (
    <div>
        <input placeholder="Email" onChange={(event) => setEmail(event.target.value)}></input>
        <input placeholder="Password" type="password" onChange={(event) => setPassword(event.target.value)}></input>
        <button onClick={signIn}>Sign in</button>
    </div>
  )
}

export default FireBAuth