import React from "react";

const ViewPopUpStart = ({ selectedMarker }) => {
  return (
    <div>
      ViewPopUpStart
      <h3>{selectedMarker.name}</h3>
      <img className="FirstIamge_POPup" src={selectedMarker.image} alt={`Img of ${selectedMarker.name}`}></img>
    </div>
  );
};

export default ViewPopUpStart;
