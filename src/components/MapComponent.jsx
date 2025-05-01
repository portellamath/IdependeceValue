// Importa os componentes principais da biblioteca react-leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// Componente funcional responsável por exibir o mapa com um marcador
const MapComponent = () => {
  // Coordenadas geográficas da Fatec Itu (latitude, longitude)
  const position = [-23.2646, -47.2991]

  return (
    // Container estilizado com animação ao aparecer na tela (via AOS), sombra e cantos arredondados
    <div data-aos="fade-up" className="rounded-lg overflow-hidden shadow-md">
      
      {/* Container principal do mapa com posição central, zoom e estilo de tamanho */}
      <MapContainer 
        center={position}        // Define o ponto central do mapa
        zoom={16}                // Nível de zoom inicial
        scrollWheelZoom={false} // Desativa o zoom via scroll do mouse
        style={{ height: "400px", width: "100%" }} // Estilo do mapa
      >
        {/* Camada do mapa (tiles) baseada no OpenStreetMap */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contribuidores'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marcador fixado na posição especificada */}
        <Marker position={position}>
          {/* Popup que aparece ao clicar no marcador */}
          <Popup>
            Fatec Itu<br />
            Av. Tiradentes, 1211 – Itu/SP
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

// Exporta o componente para uso em outras partes do projeto
export default MapComponent
