import React, { useState, useEffect } from "react"
import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";

import PopUpInfo from "../Components/PopUpInfo";


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
  

  // moves to current user location
  const geolocateControlRef = React.useCallback((ref) => {
    console.log("geolocateControlRef", ref);
    if (ref) {
      // Activate as soon as the control is loaded
      ref.trigger();
    }
  }, []);


const getLocation = (event) => {
    console.log("event from getLocation funciton in MapPage",event)
    console.log("event.lngLat from getLocation funciton in MapPage",event.lngLat)
    const longitude = event.lngLat.lng;
    const latitude = event.lngLat.lat

    setLocationsMarked([
        ...locationsMarked,
        {
          name: 'New Marker',
          coordinates: [longitude,latitude],
        },
      ]);
}
useEffect(() => {
  
  }, []);

  console.log(selectedMarker)

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
              getLocation(event)
        }}
    > 
      {/* GeolocateControl imports button that will send us to current location*/}
      {/* <GeolocateControl ref={geolocateControlRef}></GeolocateControl> */}
      {/* NavigationControl gives us zoom and move buttons on side of map */}
      <NavigationControl />
      {locationsMarked ?(
      locationsMarked.map((markedLocation, index) => (
        <Marker
          key={index}
          latitude={markedLocation.coordinates[1]}
          longitude={markedLocation.coordinates[0]}
        >
          <button
                 onClick={() => {
                    console.log(markedLocation)
                            setSelectedMarker(markedLocation);
                        }}
          >
            {markedLocation.name}
          </button>
        </Marker>
      ))
      ): null}

      {selectedMarker ? (

                <Popup
                    latitude={selectedMarker.coordinates[1]}
                    longitude={selectedMarker.coordinates[0]}
                    // onClose={() => {
                    // setSelectedMarker(null)}}
                >
                    <PopUpInfo/>
                </Popup>

            ) : null}
    </ReactMapGL>
</div>
  );
}
export default MapPage;
