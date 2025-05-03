// Importa o ícone de estrela do react-icons (usado para exibir avaliação)
import { FiStar } from 'react-icons/fi'

// Componente funcional TestimonialCard
// Ele exibe um depoimento com: estrelas (avaliação), texto, autor e foto
const TestimonialCard = ({ 
  author,      // Nome da pessoa que deu o depoimento
  position,    // Cargo ou posição da pessoa (ex: "CEO da Empresa X")
  content,     // Texto do depoimento (o feedback)
  image,       // URL da foto do autor
  rating = 5,  // Número de estrelas (avaliação). Padrão: 5 estrelas
  delayIndex = 0 // Controla o atraso da animação para efeito "em cascata"
}) => {
  return (
    // Container do cartão com fundo branco, sombra e animação
    <div 
      className="bg-white p-6 rounded-lg shadow-card transition-shadow duration-300 hover:shadow-card-hover"
      data-aos="fade-up" // Animação que sobe suavemente ao aparecer na tela
      data-aos-delay={delayIndex * 100} // Atraso da animação baseado no índice (ex: 0ms, 100ms, 200ms...)
    >

      {/* Seção de estrelas de avaliação */}
      <div className="mb-4 flex">
        {/* Cria um array com o tamanho da avaliação (ex: 5 estrelas) e renderiza as estrelas */}
        {[...Array(rating)].map((_, i) => (
          <FiStar key={i} className="text-yellow-400 fill-current" />  // Estrela amarela preenchida
        ))}
      </div>

      {/* Texto do depoimento (o conteúdo) */}
      <p className="mb-6 text-gray-700 italic">
        "{content}" {/* Mostra o texto entre aspas */}
      </p>

      {/* Informações do autor: foto + nome + cargo */}
      <div className="flex items-center">
        
        {/* Se uma imagem foi passada, exibe a foto do autor */}
        {image && (
          <img 
            src={image}          // Caminho da imagem
            alt={author}         // Texto alternativo para acessibilidade
            className="w-12 h-12 rounded-full object-cover mr-4" // Foto redonda, tamanho 48x48px
          />
        )}

        {/* Nome e cargo do autor */}
        <div>
          <h4 className="font-semibold text-primary-600">{author}</h4> {/* Nome do autor */}
          <p className="text-sm text-gray-500">{position}</p>          {/* Cargo ou título do autor */}
        </div>
      </div>
    </div>
  )
}

// Exporta o componente para ser usado em outras páginas (ex: Página de Depoimentos)
export default TestimonialCard
