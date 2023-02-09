import React, { useState, useEffect } from "react";

import { FaBeer } from "react-icons/fa";
import Home from "./Pages/Home";
import FireBAuth from "./Components/Authentication/FireBAuth";


function App() {
 const [logedIn , setLoggedIn] = useState(false);

 useEffect(() => {}, []);

  return (
    <div>
    {logedIn?
      <Home />
      :
      <FireBAuth setLoggedIn={setLoggedIn} logedIn={logedIn}/>
    }
    </div>

  );
}

export default App;