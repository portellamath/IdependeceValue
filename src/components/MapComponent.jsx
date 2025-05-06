// Importando os componentes principais da biblioteca react-leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// Componente que renderiza um mapa interativo
const MapComponent = () => {
  // Definimos a posição central do mapa (coordenadas de Nova York)
  const position = [-23.2903129, -47.2988404]
  
  return (
    // Wrapper com animação (usando AOS) e estilo visual com bordas arredondadas e sombra
    <div data-aos="fade-up" className="rounded-lg overflow-hidden shadow-md">

      {/* Container do mapa */}
      <MapContainer 
        center={position}  // Centro do mapa baseado na posição acima
        zoom={13}          // Nível de zoom inicial
        scrollWheelZoom={false} // Desativa zoom com scroll do mouse (melhora a usabilidade)
      >

        {/* Camada base do mapa usando tiles do OpenStreetMap */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marcador posicionado nas coordenadas centrais */}
        <Marker position={position}>
          {/* Popup que aparece quando clicamos no marcador */}
          <Popup>
            Independent value<br />
            Av. Tiradentes, 1211 - Itu Sp
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  )
}

export default MapComponent
