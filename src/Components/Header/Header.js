import React from 'react'
import './header.css'


import { BsSearch,BsFillPersonFill } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";

function Header() {
  return (
    <div className='header-container'>
        <div className='header-left'>
            <span className='logo'>
            <img src="assets/BTlogo.png" alt='logo picture'className='profile-img'/>
            Been There
            </span>
        </div>
        <div className='header-center'>
            <div className='search'>
                <BsSearch className='search-icon'/>
                <input placeholder='search for friend post or video' className='search-input' />
            </div>
        </div>
        <div className='header-right'>
            <div className='person-icon'>
                <BsFillPersonFill />
                <span className='person-icon-badge'>1</span>
            </div>
            <div className='login'>
                **Login**
                <CiLogin />
            </div>
            <img src="assets/profile1.jpg" alt=''className='profile-img'/>
          </div>
 
    </div>
  )
}

export default Header