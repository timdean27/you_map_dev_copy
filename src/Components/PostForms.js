import React, { useState, useEffect } from "react";

const PostForms = ({
  LocationsMarked,
  setLocationsMarked,
  crdForNewMarker,
}) => {
  const handleChange = (e) => {
    console.log("e.target.name", e.target.id);
    console.log("e.target.value", e.target.value);
  };
  const handleSubmit = () => {
    setLocationsMarked({ ...LocationsMarked });
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
            onChange={handleChange}
          />
        </label>
        <label>
          lng:
          <input
            id="longitude"
            type="text"
            placeholder={crdForNewMarker ? crdForNewMarker.lng : "Longitude"}
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
