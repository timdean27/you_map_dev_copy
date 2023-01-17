import React, { useState, useEffect } from "react";

const PostForms = ({locationsToMark , setLocationsToMark}) => {
// [long , lat]
    const handleChange = (e) => {

            console.log("e.target.name",e.target.id)
            console.log("e.target.value",e.target.value)

    }
    const handleSubmit =() => {
        setLocationsToMark({...locationsToMark,
            
        })
    }

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
