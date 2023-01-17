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
    longitude: -73.33,
    zoom: 2.5,
    maxZoom: 14,
    minZoom: 2,
    projection: "globe",
  });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [locationsToMark, setLocationsToMark] = useState([{
    name: "New York",
    coordinates: [75.33, -45.38],
  },
  {
    name: "Second Location",
    coordinates: [45.38, -75.33],
  }],);


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

  return (
    <div>
    <ReactMapGL
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      {/* GeolocateControl imports button that will send us to current location*/}
      {/* <GeolocateControl ref={geolocateControlRef}></GeolocateControl> */}
      {/* NavigationControl gives us zoom and move buttons on side of map */}
      <NavigationControl />
      {locationsToMark ?(
      locationsToMark.map((locToMark, index) => (
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
            }}
          >
            {locToMark.name}
          </button>
        </Marker>
        {console.log("printing locToMark iinside of marker map",locToMark)}
        </div>
      ))
      ): null}


      {selectedMarker ? (
        <Popup
          onClose={() => {
            setSelectedMarker(null);
          }}
        >
          <PopUpInfo
            selectedTest={selectedTest}
            selectedMarker={selectedMarker}
          />
        </Popup>
      ) : null}
    </ReactMapGL>
    <PostForms locationsToMark={locationsToMark} setLocationsToMark={setLocationsToMark}/>
</div>
  );
}
export default MapPage;
