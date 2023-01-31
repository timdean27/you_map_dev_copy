import React from 'react'
import Header from "../Components/Header/Header"
import MapPage from "./MapPage"
import FireBAuth from '../Components/Authenticatio/FireBAuth'
// not sure this is needed yet

const Home = () => {
  return (
    <div>
      <Header />
      <FireBAuth />
      <MapPage/>
    </div>
  )
}

export default Home