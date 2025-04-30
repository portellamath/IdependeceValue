import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapComponent = () => {
  // Coordenadas da Fatec Itu
  const position = [-23.2646, -47.2991]
  
  return (
    <div data-aos="fade-up" className="rounded-lg overflow-hidden shadow-md">
      <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contribuidores'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Fatec Itu<br />
            Av. Tiradentes, 1211 – Itu/SP
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapComponent
