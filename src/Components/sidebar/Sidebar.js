import React from 'react'
import './sidebar.css'
import { FaUserFriends } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className='sidebar'>
        Sidebar
        <div className='side-wrapper'>
           <ul className='sidebar-list'>
               <li className='sidebar-item'>
                <FaUserFriends className='sidebar-icon'/>
                Friends

               </li>
           </ul>
           <button className='sidebar-button'>Something</button>
           <hr className='sidebar-hr'/>
           <ul className='sidebar-friendList'>
            <li className='sidebar-friend'>
              <img className='sidebar-image' src='assets/profile4.jpg'alt='' />
              <span className='sidebar-friendName'>Bob Bob</span>
            </li>
            <li className='sidebar-friend'>
              <img className='sidebar-image' src='assets/profile4.jpg'alt='' />
              <span className='sidebar-friendName'>Bob Bob</span>
            </li>
            <li className='sidebar-friend'>
              <img className='sidebar-image' src='assets/profile4.jpg'alt='' />
              <span className='sidebar-friendName'>Bob Bob</span>
            </li>
            <li className='sidebar-friend'>
              <img className='sidebar-image' src='assets/profile4.jpg'alt='' />
              <span className='sidebar-friendName'>Bob Bob</span>
            </li>
            <li className='sidebar-friend'>
              <img className='sidebar-image' src='assets/profile4.jpg'alt='' />
              <span className='sidebar-friendName'>Bob Bob</span>
            </li>
            <li className='sidebar-friend'>
              <img className='sidebar-image' src='assets/profile4.jpg'alt='' />
              <span className='sidebar-friendName'>Bob Bob</span>
            </li>
            <li className='sidebar-friend'>
              <img className='sidebar-image' src='assets/profile4.jpg'alt='' />
              <span className='sidebar-friendName'>Bob Bob</span>
            </li>
            <li className='sidebar-friend'>
              <img className='sidebar-image' src='assets/profile4.jpg'alt='' />
              <span className='sidebar-friendName'>Bob Bob</span>
            </li>
            <li className='sidebar-friend'>
              <img className='sidebar-image' src='assets/profile4.jpg'alt='' />
              <span className='sidebar-friendName'>Bob Bob</span>
            </li>
            <li className='sidebar-friend'>
              <img className='sidebar-image' src='assets/profile4.jpg'alt='' />
              <span className='sidebar-friendName'>Bob Bob</span>
            </li>
            <li className='sidebar-friend'>
              <img className='sidebar-image' src='assets/profile4.jpg'alt='' />
              <span className='sidebar-friendName'>Bob Bob</span>
            </li>
            <li className='sidebar-friend'>
              <img className='sidebar-image' src='assets/profile4.jpg'alt='' />
              <span className='sidebar-friendName'>Bob Bob</span>
            </li>
            <li className='sidebar-friend'>
              <img className='sidebar-image' src='assets/profile4.jpg'alt='' />
              <span className='sidebar-friendName'>Bob Bob</span>
            </li>
            <li className='sidebar-friend'>
              <img className='sidebar-image' src='assets/profile4.jpg'alt='' />
              <span className='sidebar-friendName'>Bob Bob</span>
            </li>

           </ul>
        </div>
    </div>
  )
}

export default Sidebar