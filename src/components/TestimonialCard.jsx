import { FiStar } from 'react-icons/fi'

// Componente funcional TestimonialCard para exibir depoimentos com avaliação e informações do autor
const TestimonialCard = ({ author, position, content, image, rating = 5, delayIndex = 0 }) => {
  return (
    // Cartão de depoimento com animação de fade-up (AOS)
    <div 
      className="bg-white p-6 rounded-lg shadow-card transition-shadow duration-300 hover:shadow-card-hover"
      data-aos="fade-up"
      data-aos-delay={delayIndex * 100}
    >
      <div className="mb-4 flex">
        {[...Array(rating)].map((_, i) => (
          <FiStar key={i} className="text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="mb-6 text-gray-700 italic">"{content}"</p>
      <div className="flex items-center">
        {image && (
          <img 
            src={image} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover mr-4" 
          />
        )}
        <div>
          <h4 className="font-semibold text-primary-600">{author}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  )
}

// Exporta o componente para ser utilizado em outras partes do código
export default TestimonialCard