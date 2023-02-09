import React from 'react'
import Header from "../Components/Header/Header"
import MapPage from "./MapPage"
import FireBaseLogin from '../Components/Authentication/FireBaseLogin'
import Rightside from '../Components/rightside/Rightside'
import Sidebar from '../Components/sidebar/Sidebar'

import './home.css'


const Home = () => {
  return (
    <div>
      <Header />
      <div className='homepage-container'>
      <Sidebar />
      <FireBaseLogin />
      <MapPage className='map-page'/>
      <Rightside />
      </div>
    </div>
  )
}

export default Home