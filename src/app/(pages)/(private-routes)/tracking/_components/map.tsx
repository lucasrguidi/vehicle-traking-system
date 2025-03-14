'use client';
import Vehicle from '@/app/types/vehicle';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

interface VehicleMapProps {
  vehicle: Vehicle;
}

export default function Map({ vehicle }: VehicleMapProps) {
  {
    const { isLoaded, loadError } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    });

    if (loadError) return <div>Erro ao carregar o mapa</div>;
    if (!isLoaded) return <div>Carregando mapa...</div>;

    const vehiclePosition = {
      lat: vehicle.ultima_latitude!,
      lng: vehicle.ultima_longitude!,
    };

    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={15}
        center={vehiclePosition}
      >
        <Marker position={vehiclePosition} />
      </GoogleMap>
    );
  }
}
