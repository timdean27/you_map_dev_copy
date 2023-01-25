import React, { useState, useEffect } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";

import PopUpInfo from "../Components/PopUpInfo";

function MapPage() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [currentLatLng, setCurrentLatLng] = useState(["0.00000", "0.00000"]);
  const [viewState, setViewState] = useState({
    width: "100%",
    height: "100%",
    latitude: 40.87,
    longitude: -98.33,
    zoom: 1.5,
    maxZoom: 14,
    minZoom: 0,
    projection: "globe",
  });

  const [locationsMarked, setLocationsMarked] = useState([
    {
      name: "New York",
      coordinates: [-73.33, 40.87], // [long , lat]
    },
    {
      name: "Denver",
      coordinates: [-105.33, 39.87],
    },
  ]);


//   On move fucntionality sets current lat and long (print e to see full object)
// style and global are hard set in ReactMapGl comp
  const onMoveFunc = (e) => {
    // console.log("event from move fucntion",e);
    setViewState(e.viewState);
    setCurrentLatLng([e.viewState.latitude , e.viewState.longitude])
  };

  const getLocation = (event) => {
    console.log("event from getLocation funciton in MapPage", event);
    console.log(
      "event.lngLat from getLocation funciton in MapPage",
      event.lngLat
    );
    const longitude = event.lngLat.lng;
    const latitude = event.lngLat.lat;

    setLocationsMarked([
      ...locationsMarked,
      {
        name: "New Marker",
        coordinates: [longitude, latitude],
      },
    ]);
  };

  useEffect(() => {}, []);

  console.log("selected marker",selectedMarker);

  return (
    <div>
      <div className="CurrentLatLngBox">
        Current Location
        <div>Latitude:{currentLatLng[0]}</div>
        <div>Longitude:{currentLatLng[1]}</div>
      </div>
      <ReactMapGL
        style={{ width: 800, height: 600 }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
        projection="globe"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...viewState}
        onMove={onMoveFunc}
        onDblClick={(event) => {
          event.preventDefault();
          getLocation(event);
        }}
      >
        {/* GeolocateControl imports button that will send us to current location*/}
        {/* <GeolocateControl ref={geolocateControlRef}></GeolocateControl> */}
        {/* NavigationControl gives us zoom and move buttons on side of map */}
        <NavigationControl />
        {locationsMarked
          ? locationsMarked.map((markedLocation, index) => (
              <Marker
                key={index}
                latitude={markedLocation.coordinates[1]}
                longitude={markedLocation.coordinates[0]}
              >
                <button
                  onClick={() => {
                    console.log(markedLocation);
                    setSelectedMarker(markedLocation);
                  }}
                >
                  {markedLocation.name}
                </button>
              </Marker>
            ))
          : null}

        {selectedMarker ? (
          <div>
            <Popup
              latitude={selectedMarker.coordinates[1]}
              longitude={selectedMarker.coordinates[0]}
              // onClose={() => {
              // setSelectedMarker(null)}}
            >
              <PopUpInfo />
            </Popup>
          </div>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
export default MapPage;
