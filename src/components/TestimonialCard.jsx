// Importa o ícone de estrela da biblioteca react-icons (usado para avaliação)
import { FiStar } from 'react-icons/fi'

// Componente TestimonialCard: exibe um depoimento com avaliação, conteúdo e dados do autor
const TestimonialCard = ({ 
  author,      // Nome da pessoa que deu o depoimento
  position,    // Cargo ou função dessa pessoa (ex: CEO da empresa X)
  content,     // Texto do depoimento
  image,       // URL da imagem do autor
  rating = 5,  // Quantidade de estrelas (padrão é 5)
  delayIndex = 0 // Controla o atraso da animação para efeito sequencial
}) => {
  return (
    <div 
      // Card com fundo branco, padding, bordas arredondadas e sombra com efeito hover
      className="bg-white p-6 rounded-lg shadow-card transition-shadow duration-300 hover:shadow-card-hover"
      // Animação suave ao rolar usando AOS (fade-up)
      data-aos="fade-up"
      data-aos-delay={delayIndex * 100} // Atraso progressivo para animações em lista
    >

      {/* Estrelas de avaliação */}
      <div className="mb-4 flex">
        {[...Array(rating)].map((_, i) => (
          <FiStar key={i} className="text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Texto do depoimento */}
      <p className="mb-6 text-gray-700 italic">"{content}"</p>

      {/* Informações do autor */}
      <div className="flex items-center">
        {image && ( // Se a imagem existir, exibe a foto do autor
          <img 
            src={image} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover mr-4" 
          />
        )}
        
        {/* Nome e cargo */}
        <div>
          <h4 className="font-semibold text-primary-600">{author}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  )
}

// Exporta o componente para uso em outras partes do site
export default TestimonialCard