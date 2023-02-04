import React from 'react'
import './post.css'
import {AiOutlineMore} from 'react-icons/ai'

function Post() {
  return (
    <div className='post'>Post
        <div className="post-wrapper">
            <div className="post-top">
                <div className="post-topleft">
                    <img className='post-profileimg' src="assets/profile2.jpg" alt="" />
                    <span className="post-username">bob bob</span>
                    <sapn className="post-userdate">5 min ago</sapn>
                </div>
                <div className="post-topright">
                    <AiOutlineMore />
                </div>
            </div>
            <div className="post-center">
                <span className="post-text">The first Post</span>
                <img className='post-img' src="assets/vacapic1a.jpg" alt="" />
            </div>
            <div className="post-bottom">
                <div className="post-bottom-left">
                    <img className='likeicon' src="assets/likeicon.jpg" alt="" />
                    <img className='hearticon' src="assets/hearticon.jpg" alt="" />
                    <span className="post-likes-counter">20 people like it</span>
                </div>
                <div className="post-bottom-right"></div>
                <span className="post-commenttext">9 comments</span>
            </div>

        </div>
    </div>
  )
}

export default Post