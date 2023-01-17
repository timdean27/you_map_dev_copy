import React, { useState, useEffect } from "react";

const PostForms = ({locationsToMark , setLocationsToMark}) => {

    const handleChange = (e) => {
        setLocationsToMark({...locationsToMark,
            
                [e.target.id]: e.target.value,
                // "coordinates":[latitude,longitude]
            
        
        })
    }
    const handleSubmit =() => {}

  return (
    <div >
        <form onSubmit={handleSubmit}>
            <input id="name" type="text" placeholder="Name" onChange={handleChange}/>
            <input id="latitude" type="text" placeholder="Lat" onChange={handleChange}/>
            <input id="longitude" type="text" placeholder="Long" onChange={handleChange}/>
            <button className="addFoodPG-btn" type="submit">Add New Location</button>
        </form>
    </div>
  )
}

export default PostForms
