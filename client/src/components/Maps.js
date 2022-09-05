
import React from 'react';
import { GoogleMap, useLoadScript, Marker } from 'react-google-maps/api'

export default function Venue() {
   const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY
   })
   if (!isLoaded) return <div>Loading...</div>
    return <Map />
}

function Map(){
    const center= useMemo(() => ({lat: 25, lng:-80}))
    return (
    <GoogleMap zoom={10} center={center} mapContainerClassName='map-container'>
        <Marker position={center} />
    </GoogleMap>
    )
}