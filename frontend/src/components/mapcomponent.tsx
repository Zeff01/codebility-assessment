// components/MapComponent.tsx
'use client';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'leaflet/dist/leaflet.css';

const customIcon = L.divIcon({
  className: '',
  html: '<i class="fas fa-map-marker-alt text-red-600 text-3xl"></i>',
  iconSize: [24, 24],
  iconAnchor: [12, 24],
});

const MapComponent = () => {
  return (
    <MapContainer
      center={[49.263556, -123.138583]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[49.263556, -123.138583]} icon={customIcon} />
    </MapContainer>
  );
};

export default MapComponent;
