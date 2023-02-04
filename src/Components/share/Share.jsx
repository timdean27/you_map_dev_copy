import React from 'react'
import './share.css'
import { GoFileMedia } from 'react-icons/go';
import { MdFavoriteBorder } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';



function Share() {
  return (
    <div className='share'>
        <div className="share-wrapper">
            <div className="share-top">
                <img src="/assets/profile2.jpg" className='share-profile-img' alt="" />
                <input placeholder='what is up?' 
                        className="share-input" />
            </div>
            <hr className='share-hr' />
            <div className="share-bottom">
                <div className="share-options">
                    <div className="share-option">
                        <GoFileMedia color="blue" className='share-icon'/>
                        <span className='share-option-text'>photo or video </span>
                    </div>
                    <div className="share-option">
                        <MdFavoriteBorder color="green" className='share-icon'/>
                        <span className='share-option-text'>Favorite </span>
                    </div>
                    <div className="share-option">
                        <AiOutlineLike color="red" className='share-icon'/>
                        <span className='share-option-text'>Like </span>
                    </div>
                    <div className="share-option">
                        <GoFileMedia color='orange' className='share-icon'/>
                        <span className='share-option-text'>photo or video </span>
                    </div>
                </div>
                <button className="share-btn">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share