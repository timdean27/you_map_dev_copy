import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './rightside.css'

function Rightside() {
  return (
    <div className='rightside'> Rightside
        <div className="rightside-wrapper">
            <Share />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
  )
}

export default Rightside