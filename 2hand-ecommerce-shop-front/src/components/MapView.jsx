/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import axios from "axios";
const OPENCAGE_API_KEY = import.meta.env.VITE_OPENCAGE_API_KEY;

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function MapView({ city }) {
  const [position, setPosition] = useState([51.505, -0.09]); // Default location

  useEffect(() => {
    // Function to get city location from geocoding API
    const getCityLocation = async () => {
      try {
        const response = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${city},ES&key=${OPENCAGE_API_KEY}`
        );
        const location = response.data.results[0].geometry;
        setPosition([location.lat, location.lng]);
      } catch (error) {
        console.error("Error getting city location: ", error);
      }
    };

    if (city) {
      getCityLocation();
    }
  }, [city]);

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "50vh", width: "100%" }}
    >
      <ChangeView center={position} zoom={13} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapView;
