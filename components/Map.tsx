'use client';

import { memo } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapProps {
  location: {
    lat: number;
    lng: number;
  };
}

const containerStyle = {
  width: '100%',
  height: '400px',
};

function Map({ location }: MapProps) {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY as string}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
}

export default memo(Map);

