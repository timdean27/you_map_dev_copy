import React, { useState, useEffect } from "react";

const PopUpInfo = ({selectedTest, selectedMarker}) => {
    const [modelOpening, setModelOpening] = useState(false);



    const openModel = () => {
        console.log('Button on POPUP Page was clicked');
        console.log(selectedTest)
        // functions to gather current locaiton
        // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          };
          function success(pos) {
            const crd = pos.coords;
            console.log("Your current position is:");
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
            console.log("CRD", crd);
          }
          function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
          }
          navigator.geolocation.getCurrentPosition(success, error, options);
        ////////////////////////////////////////////////////////////////////
      };


  return (
    <div>
    <button onClick={() => openModel()}>
        PopUpButton {selectedMarker.name}
    </button>
    
    </div>
  )
}

export default PopUpInfo