// Importa os principais componentes da biblioteca react-leaflet para montar o mapa
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// Componente funcional que exibe um mapa com um marcador em uma localização específica
const MapComponent = () => {
  // Define as coordenadas geográficas da Fatec Itu (latitude, longitude)
  const position = [-23.2646, -47.2991]

  return (
    // Div que estiliza o mapa com animação (AOS), bordas arredondadas e sombra
    <div 
      data-aos="fade-up" // Faz o mapa "subir" com animação quando aparece na tela
      className="rounded-lg overflow-hidden shadow-md" // Deixa o mapa com cantos arredondados e sombra
    >
      
      {/* Container principal do mapa */}
      <MapContainer 
        center={position}        // Define onde o mapa vai ficar centralizado (Fatec Itu)
        zoom={16}                // Define o nível de zoom (quanto maior, mais próximo)
        scrollWheelZoom={false} // Impede que o usuário dê zoom com o scroll do mouse (opcional)
        style={{ height: "400px", width: "100%" }} // Define o tamanho do mapa (400px de altura e largura total)
      >
        {/* Camada visual do mapa que usa os tiles gratuitos do OpenStreetMap */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contribuidores' 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL dos blocos (tiles) do mapa
        />

        {/* Marcador fixo na localização da Fatec Itu */}
        <Marker position={position}>
          {/* Popup que aparece quando o usuário clica no marcador */}
          <Popup>
            Fatec Itu<br />
            Av. Tiradentes, 1211 – Itu/SP
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

// Exporta o componente para poder usá-lo em qualquer página do projeto
export default MapComponent
