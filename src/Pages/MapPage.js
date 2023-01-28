import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";

import EditPopUpInfo from "../Components/EditPopUpInfo";
import ViewPopUpStart from "../Components/ViewPopUpStart";

function MapPage() {
  const [editPopupInfo, setEditPopupInfo] = useState(false);
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
      image:"https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1549321174/production/city/hero_image_12_1549321174.jpg"
    },
    {
      name: "Denver",
      coordinates: [-105.33, 39.87],
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6r9FJ03CZaE9cXY3Fs2IXMdKewUk3glFMTQ&usqp=CAU"
    },
  ]);

  // On move fucntionality sets current lat and long (print e to see full object)
  // style and global are hard set in ReactMapGl comp
  const onMoveFunc = (e) => {
    //    console.log("event from move fucntion",e);
    setViewState(e.viewState);
    setCurrentLatLng([e.viewState.latitude, e.viewState.longitude]);
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

  const clickFuncSelectMarker = (markedLocation) => {
    if (markedLocation != selectedMarker) {
      console.log("marked location in onClick button", markedLocation);
      setSelectedMarker(markedLocation);
    } else console.log(markedLocation);
  };

  useEffect(() => {}, []);

  // console.log("selected marker",selectedMarker);
  // function to Edit Popup

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
        <NavigationControl />
        {locationsMarked
          ? locationsMarked.map((markedLocation, index) => (
              <Marker
                key={index}
                latitude={markedLocation.coordinates[1]}
                longitude={markedLocation.coordinates[0]}
              >
                <div
                  className="marker"
                  onClick={(e) => {
                    e.preventDefault();
                    clickFuncSelectMarker(markedLocation);
                  }}
                >
                  {markedLocation.name}
                </div>
              </Marker>
            ))
          : null}

        {selectedMarker ? (
          <Popup
            closeOnClick={false}
            closeButton={true}
            latitude={selectedMarker.coordinates[1]}
            longitude={selectedMarker.coordinates[0]}
            onClose={(e) => {
              setSelectedMarker(null);
              setEditPopupInfo(false);
            }}
          >
            {editPopupInfo ? (
              <div>
                <EditPopUpInfo
                  selectedMarker={selectedMarker}
                  locationsMarked={locationsMarked}
                  setLocationsMarked={setLocationsMarked}
                  setEditPopupInfo={setEditPopupInfo}
                />
              </div>
            ) : (
              <div>
                <button
                  onClick={(e) => {
                    setEditPopupInfo(true);
                  }}
                >
                  Edit
                </button>
                <ViewPopUpStart selectedMarker={selectedMarker} />
              </div>
            )}
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
export default MapPage;
