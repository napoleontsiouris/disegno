import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const StoreMap = ({ position, fullHeight = false }) => {
  const logoMarkerIcon = L.divIcon({
    html: '<div style="width:50px;height:50px;border-radius:999px;background:#111;box-shadow:0 10px 24px rgba(0,0,0,0.35);border:2px solid #fff;"></div>',
    iconSize: [50, 50],
    iconAnchor: [34, 68],
    popupAnchor: [0, -58],
    className: 'store-logo-marker',
  });

  return (
    <div style={{ height: fullHeight ? '100%' : '280px', minHeight: '280px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position} icon={logoMarkerIcon}>
          <Popup>Disegno - Κουρογιαννοπούλου 37, Αμαλιάδα</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default StoreMap;
