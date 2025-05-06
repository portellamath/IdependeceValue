// Componente que exibe um "cartão" de solução, com ícone, título e descrição.
const SolutionCard = ({ 
  icon,         // Ícone que representa a solução
  title,        // Título da solução
  description,  // Breve descrição da solução
  delayIndex = 0 // Controla o atraso da animação (usado para dar efeito em lista)
}) => {
  return (
    <div 
      // Estilo do card com padding, fundo branco, bordas arredondadas e efeito de sombra ao passar o mouse
      className="p-6 bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300"
      // Animação ao rolar (usando AOS)
      data-aos="fade-up" 
      data-aos-delay={delayIndex * 100} // Dá um pequeno delay para efeito em sequência
    >
      {/* Cabeçalho do card: ícone + título */}
      <div className="flex items-center mb-4">
        {/* Ícone do card (recebido como prop) */}
        <div className="mr-4 text-secondary-500">
          {icon}
        </div>

        {/* Título da solução */}
        <h3 className="text-xl font-semibold text-primary-500">{title}</h3>
      </div>

      {/* Descrição da solução */}
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

// Exporta o componente para ser usado em outras partes do site
export default SolutionCard
