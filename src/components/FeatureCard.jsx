// Componente funcional que recebe ícone, título, descrição e um índice para delay da animação
const FeatureCard = ({ icon, title, description, delayIndex = 0 }) => {
  return (
    <div 
      // Estilização com Tailwind CSS: fundo branco, padding, borda arredondada, sombra padrão e sombra ao passar o mouse
      className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300"

      // Atributos de animação AOS (Animate On Scroll): animação "fade-up" com delay baseado no índice
      data-aos="fade-up"
      data-aos-delay={delayIndex * 100} // Ex: se delayIndex = 2, o delay será de 200ms
    >
      {/* Ícone envolvido por um círculo estilizado */}
      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 text-primary-500 rounded-lg mb-4">
        {icon}
      </div>

      {/* Título da feature, com destaque na cor primária */}
      <h3 className="text-xl font-semibold mb-3 text-primary-500">{title}</h3>

      {/* Descrição da feature em cor cinza clara */}
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

// Exporta o componente para que possa ser utilizado em outros arquivos
export default FeatureCard
