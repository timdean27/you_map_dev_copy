import React, { useState, useEffect } from "react"
import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";

import PopUpInfo from "../Components/PopUpInfo";
import PostForms from "../Components/PostForms";

function MapPage() {
  const [viewState, setViewState] = useState({
    width: "100%",
    height: "100%",
    latitude: 40.87,
    longitude: -98.33,
    zoom: 2.5,
    maxZoom: 14,
    minZoom: 2,
    projection: "globe",
  });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [locationsMarked, setLocationsMarked] = useState([{
    name: "New York",
    coordinates: [-73.33, 40.87] // [long , lat]
  },
  {
    name: "Denver",
    coordinates: [-105.33, 39.87],
  }],);
  const [crdForNewMarker, setCrdForNewMarker] = useState(null);

  // moves to current user location
  const geolocateControlRef = React.useCallback((ref) => {
    console.log("geolocateControlRef", ref);
    if (ref) {
      // Activate as soon as the control is loaded
      ref.trigger();
    }
  }, []);

  //   test props to popup
  let selectedTest = "Slected works and passes to comp";
  
// functions to gather current locaiton
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition 

const getLocation = () => {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 60000
      };
      
      function success(pos) {
        const crd = pos.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        setCrdForNewMarker(crd)
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);
}

  return (
    <div>
    <ReactMapGL
 
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      onDblClick={(event)=> {
              event.preventDefault();
              getLocation()
        }}
    > 
      {/* GeolocateControl imports button that will send us to current location*/}
      {/* <GeolocateControl ref={geolocateControlRef}></GeolocateControl> */}
      {/* NavigationControl gives us zoom and move buttons on side of map */}
      <NavigationControl />
      {locationsMarked ?(
      locationsMarked.map((locToMark, index) => (
        <div key={index}>
        <Marker
          key={index}
          latitude={locToMark.coordinates[1]}
          longitude={locToMark.coordinates[0]}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
            setSelectedMarker(locToMark);
            console.log("locToMark from button in Map Page", locToMark);
            }}
          >
            {locToMark.name}
          </button>
        </Marker>
        {console.log("printing locToMark inside of marker map",locToMark)}
        </div>
      ))
      ): null}


      {selectedMarker ? (
        <Popup
        latitude={selectedMarker.coordinates[1]}
            longitude={selectedMarker.coordinates[0]}
          onClose={() => {
            setSelectedMarker(null);
          }}
        >
          <PopUpInfo
            selectedTest={selectedTest}
           selectedMarker={selectedMarker}
          />
          Hello
        </Popup>
      ) : null}
    </ReactMapGL>
    <PostForms crdForNewMarker={crdForNewMarker} locationsMarked={locationsMarked} setLocationsMarked={setLocationsMarked}/>
</div>
  );
}
export default MapPage;
