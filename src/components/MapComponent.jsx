import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapComponent = () => {
  // New York City coordinates
  const position = [40.7128, -74.0060]
  
  return (
    <div data-aos="fade-up" className="rounded-lg overflow-hidden shadow-md">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            IV Value Financial Management<br />
            123 Finance Street, New York
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapComponent