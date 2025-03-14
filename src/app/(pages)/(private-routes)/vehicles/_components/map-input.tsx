import React, { useState } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '200px',
};

const center = {
  lat: -23.5505,
  lng: -46.6333,
};

export interface Coordinates {
  lat: number;
  lng: number;
}

interface MapInputProps {
  onLocationSelect: (coords: Coordinates) => void;
}

export default function MapInput({ onLocationSelect }: MapInputProps) {
  const [markerPosition, setMarkerPosition] = useState<Coordinates | null>(
    null
  );

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      const coords: Coordinates = { lat, lng };
      setMarkerPosition(coords);
      onLocationSelect(coords);
    }
  };

  if (loadError) return <div>Erro ao carregar o mapa</div>;
  if (!isLoaded) return <div>Carregando...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
      onClick={handleMapClick}
    >
      {markerPosition && <Marker position={markerPosition} />}
    </GoogleMap>
  );
}
