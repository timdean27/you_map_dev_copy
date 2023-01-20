import React, { useState, useEffect } from "react";

const PostForms = ({
locationsMarked,
  setLocationsMarked,
  crdForNewMarker,
}) => {
  const [holdName, setHoldName] = useState()
  const [holdLat, setHoldLat] = useState()
  const [holdLng, setHoldLng] = useState()
  const [locationsMarkedTest, setLocationsMarkedTest] = useState()

    const handleChange = (e) => {
        switch (e.target.id){
            case "name":
                console.log("Name from switch in post forms", e.target.value)
                setHoldName(e.target.value)
                break;
            case "latitude":
                console.log("latitude from switch in post forms", e.target.value)
                setHoldLat(e.target.value)
                break;
            case "longitude":
                console.log("longitude from switch in post forms", e.target.value)
                setHoldLng(e.target.value)
                break;
            default:
                console.log('default from switch in post forms');
        } 
  };

  
  const handleSubmit = () => {
    setLocationsMarkedTest([...locationsMarkedTest,{
        name: holdName,
        coordinates: [holdLng, holdLat] // [long , lat]
      }]);

      console.log(setLocationsMarkedTest)
  };



  useEffect(() => {
    console.log("crdForNewMarker printing from post forms", crdForNewMarker);
  }, [crdForNewMarker]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            id="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
        </label>
        <label>
          lat:
          <input
            id="latitude"
            type="text"
            placeholder={crdForNewMarker ? crdForNewMarker.lat : "Latitude"}
            value={crdForNewMarker ? crdForNewMarker.lat : ""}
            onChange={handleChange}
          />
        </label>
        <label>
          lng:
          <input
            id="longitude"
            type="text"
            placeholder={crdForNewMarker ? crdForNewMarker.lng : "Longitude"}
            value={crdForNewMarker ? crdForNewMarker.lng : ""}
            onChange={handleChange}
          />
        </label>
        <button className="addFoodPG-btn" type="submit">
          Add New Location
        </button>
      </form>
      <h3>Double Click on Map to set Location Lat and Long</h3>
    </div>
  );
};

export default PostForms;
