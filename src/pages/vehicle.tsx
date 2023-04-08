import React from "react";
import "../index.css";
import Dashboard from "../layouts/dashboard";
import { useState, useMemo, useCallback } from "react";
import { createRoot } from "react-dom/client";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

import DrawControl from "./components/draw-control";
import ControlPanel from "./components/control-panel";
import Pin from "./components/pin";
import CITIES from "./json/cities.json";

const TOKEN =
  "pk.eyJ1IjoiZmFuZGlsbGFkcCIsImEiOiJja2t2bGhtdW8xNWE1MnBsbXR5bTFyNm94In0.Cw8RqeLPToDY7XpQuI4cjw"; // Set your mapbox token here
export default function vehicle() {
  const [popupInfo, setPopupInfo] = useState(null);
  const [features, setFeatures] = useState({});

  const onUpdate = useCallback((e) => {
    setFeatures((currFeatures) => {
      const newFeatures = { ...currFeatures };
      for (const f of e.features) {
        newFeatures[f.id] = f;
      }
      return newFeatures;
    });
  }, []);

  const onDelete = useCallback((e) => {
    setFeatures((currFeatures) => {
      const newFeatures = { ...currFeatures };
      for (const f of e.features) {
        delete newFeatures[f.id];
      }
      return newFeatures;
    });
  }, []);
  const pins = useMemo(
    () =>
      CITIES.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );
  return (
    <Dashboard>
      <div className="items-center justify-center w-full h-full">
        <div className="container w-full h-96 mx-auto px-4 py-4 my-auto">
          <Map
            initialViewState={{
              longitude: 105.2707381,
              latitude: -5.4286721,
              zoom: 8,
              bearing: 0,
              pitch: 0,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            mapboxAccessToken={TOKEN}
          ></Map>
        </div>
      </div>
    </Dashboard>
  );
}
