import React, { useState, useEffect } from "react";

const PostForms = ({LocationsMarked , setLocationsMarked, crdForNewMarker}) => {

    console.log("crdForNewMarker printing from post forms", crdForNewMarker)
    const handleChange = (e) => {

            console.log("e.target.name",e.target.id)
            console.log("e.target.value",e.target.value)

    }
    const handleSubmit =() => {
        setLocationsMarked({...LocationsMarked,
            
        })
    }



  return (
    <div >
        <form onSubmit={handleSubmit}>
            <input id="name" type="text" placeholder="Name" onChange={handleChange}/>
            <input id="latitude" type="text" placeholder={crdForNewMarker ? crdForNewMarker.latitude : "Latitude" }  onChange={handleChange}/>
            <input id="longitude" type="text" placeholder={crdForNewMarker ? crdForNewMarker.longitude : "Longitude" } onChange={handleChange}/>
            <button className="addFoodPG-btn" type="submit">Add New Location</button>
            
        </form>
        <h3>Double Click on Map to set Location Lat and Long</h3>
    </div>
  )
}

export default PostForms
