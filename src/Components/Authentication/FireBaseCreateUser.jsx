import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup , signUpWithGoogle } from "firebase/auth";
import { auth ,googleProvider} from "../../firebase";
import { AuthContext } from "../../Context/AuthContext";

const FireBaseCreateUser = () => {

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate()

  const {dispatch} = useContext(AuthContext);



  const handleLogin = (e) => {
    
    e.preventDefault();

    signInWithPopup(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        console.log("user Credentials from email sign in", user)
        navitage("/")
      })
      .catch((error) => {
        setError(true);
      });
  };


  const signUpWithGoogle = async () => {
    try {
      await signUpWithGoogle(auth, googleProvider).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        console.log("user Credentials from google sign in", user)
        navitage("/")
      });
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      navitage("/FireBaseLogin")
    } catch (err) {
      console.error(err);
    }
  };

console.log("currentuser in login page" , currentUser)
  return (
    <div>FireBaseCreateUser</div>
  )
}

export default FireBaseCreateUser