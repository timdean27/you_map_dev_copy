import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import Home from "./Pages/Home";
import FireBaseLogin from "./Components/Authentication/FireBaseLogin";
import FireBaseCreateUser from "./Components/Authentication/FireBaseCreateUser";

function App() {

  const currentUser =  false

  const RequireAuth = ({childern}) =>{
    return currentUser ? (childern) : <Navigate to="/FireBaseLogin" />
  }

  return (
    <BrowserRouter><Routes>
      <Route path="FireBaseLogin" element={<FireBaseLogin/>} />
      <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />

    </Routes></BrowserRouter>
 
  );
}

export default App;