import React, { useEffect } from 'react';
import './index.css';
import L from 'leaflet';
// const dotenv = require('dotenv').config
// const fs = require('fs')
// const path = require('path')

var apiKey = process.env.API_KEY

function MyMap() {
  let mapContainer;

  useEffect(() => {
    const initialState = {
      lng: 42,
      lat: -90,
      zoom: 15
    };

    const map = L.map(mapContainer).setView([41.4, -91.04], initialState.zoom);
    // if (map != undefined) { map.remove(); }
    var myAPIKey = 'YOUR_API_KEY_HERE';

    var isRetina = L.Browser.retina;
    var baseUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=2c7a37f5fc2d4819ab75546ea110592c";
    var retinaUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey=2c7a37f5fc2d4819ab75546ea110592c";
    
    L.tileLayer(isRetina ? retinaUrl : baseUrl, {
      attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>',
      apiKey: myAPIKey,
      maxZoom: 12,
      id: 'osm-bright',
    }).addTo(map);
    // var marker = L.marker( markerIconPng, MarkerShadow, [41.42, -91.04]).addTo(map)
  }, [mapContainer]);

  return (
    <div className="map-container" ref={el => mapContainer = el}>
    </div>
  )
}

export default MyMap;