import { createUserWithEmailAndPassword , signInWithPopup , signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import {auth, googleProvider} from "../../firebase"
const FireBAuth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = async (e) => {
        e.preventDefault()
        try{
        await createUserWithEmailAndPassword(auth, email, password).then(
            setEmail(""),
            setPassword("")
            
        )}
        catch(err){console.error(err)}
        
    }
    console.log("full Auth object" , auth)
    console.log("auth current user onbject" ,  auth?.currentUser)
    console.log("auth current user email" ,  auth?.currentUser?.email)
    // console.log("firebase current user accessToken" , auth?.currentUser?.accessToken)
    
    const signInWithGoogle = async (e) => {
      e.preventDefault()
      try{
      await signInWithPopup(auth, googleProvider) 
      }
      catch(err){console.error(err)}
      
  }
  

  const LogOut = async (e) => {
    e.preventDefault()
      try{
      await signOut(auth) 
      }
      catch(err){console.error(err)}
  }

  return (
    <div>
  <h1>firebaseAuth</h1>
        <input placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
        <input placeholder="Password" value={password} type="password" onChange={(event) => setPassword(event.target.value)}></input>
        <button onClick={signIn}>Sign in</button>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        <button onClick={LogOut}>Log Out</button>
    </div>
  )
}

export default FireBAuth