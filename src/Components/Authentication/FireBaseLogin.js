import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword ,signInWithPopup } from "firebase/auth";
import { auth ,googleProvider} from "../../firebase";



const FireBaseLogin = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate()




  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user Credentials from email sign in", user)
        navitage("/")
      })
      .catch((error) => {
        setError(true);
      });
  };


  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user Credentials from google sign in", user)
        navitage("/")
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
      <button onClick={signInWithGoogle}> Sign In With Google</button>
    </div>
  );
};

export default FireBaseLogin