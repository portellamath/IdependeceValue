// Componente funcional SolutionCard, que recebe ícone, título, descrição e índice de atraso para animação
const SolutionCard = ({ 
  icon,  // Ícone a ser exibido no cartão (passado como prop)
  title,  // Título do cartão (passado como prop)
  description,  // Descrição do cartão (passada como prop)
  delayIndex = 0  // Índice de atraso para a animação (padrão é 0)
}) => {
  return (
    // Container do cartão com classes de estilo
    <div 
      className="p-6 bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300"
      // Atribui a animação de entrada com AOS (Animate On Scroll), com atraso baseado no índice
      data-aos="fade-up" 
      data-aos-delay={delayIndex * 100}  // Atraso da animação baseado no delayIndex
    >
      {/* Cabeçalho do cartão contendo ícone e título */}
      <div className="flex items-center mb-4">
        {/* Ícone à esquerda, com a cor personalizada definida */}
        <div className="mr-4 text-secondary-500">
          {icon}  {/* Ícone é passado como prop */}
        </div>
        
        {/* Título do cartão */}
        <h3 className="text-xl font-semibold text-primary-500">
          {title}  {/* Exibe o título do cartão */}
        </h3>
      </div>

      {/* Descrição do cartão */}
      <p className="text-gray-600">
        {description}  {/* Exibe a descrição do cartão */}
      </p>
    </div>
  )
}

// Exporta o componente SolutionCard para ser utilizado em outras partes do projeto
export default SolutionCard
