// Componente funcional chamado SolutionCard
// Ele exibe um cartão com: ícone, título, descrição e animação
const SolutionCard = ({ 
  icon,        // Ícone que aparece no topo do cartão (ex: um ícone de solução)
  title,       // Título que descreve a solução (ex: "Gestão de Projetos")
  description, // Texto explicando a solução
  delayIndex = 0 // Número usado para controlar o atraso da animação (padrão = 0, sem atraso)
}) => {
  return (
    // Container do cartão, com fundo branco, cantos arredondados e sombra
    <div 
      className="p-6 bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300"
      // Aplica a animação com AOS (Animate On Scroll) quando o usuário rolar a página
      data-aos="fade-up" 
      data-aos-delay={delayIndex * 100}  // Cada cartão pode aparecer com um pequeno atraso, dando efeito "cascata"
    >
      
      {/* Cabeçalho do cartão com ícone e título lado a lado */}
      <div className="flex items-center mb-4">
        
        {/* Ícone do cartão, com uma cor secundária personalizada */}
        <div className="mr-4 text-secondary-500">
          {icon} {/* Exibe o ícone que foi passado como prop */}
        </div>
        
        {/* Título do cartão */}
        <h3 className="text-xl font-semibold text-primary-500">
          {title} {/* Exibe o título que foi passado na prop */}
        </h3>
      </div>

      {/* Parágrafo com a descrição da solução */}
      <p className="text-gray-600">
        {description} {/* Exibe a descrição recebida por prop */}
      </p>
    </div>
  )
}

// Exporta o SolutionCard para ser usado em outras páginas ou componentes
export default SolutionCard
