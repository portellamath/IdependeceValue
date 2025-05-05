// Componente que representa um "card" de funcionalidade (FeatureCard)
// Recebe como props: um ícone, um título, uma descrição e um delay opcional para animação
const FeatureCard = ({ icon, title, description, delayIndex = 0 }) => {
  return (
    // Container do card com estilização e animação
    <div 
      className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300"
      data-aos="fade-up" // Usa animação AOS (Animate On Scroll)
      data-aos-delay={delayIndex * 100} // Adiciona delay para efeito em lista (ex: 0ms, 100ms, 200ms...)
    >
      {/* Ícone dentro de uma bolinha colorida */}
      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 text-primary-500 rounded-lg mb-4">
        {icon} {/* O ícone vem por props, pode ser qualquer SVG ou componente React */}
      </div>

      {/* Título da funcionalidade */}
      <h3 className="text-xl font-semibold mb-3 text-primary-500">{title}</h3>

      {/* Descrição curta da funcionalidade */}
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

// Exporta o componente para ser usado em outros lugares
export default FeatureCard
