// Componente funcional que cria um cabeçalho para seções do site (usado para títulos e subtítulos bonitos)
const SectionHeading = ({ 
  title,      // Texto principal da seção (ex: "Nossos Planos")
  subtitle,   // Texto secundário (opcional), para dar mais contexto
  centered = false,  // Se true, o título e o subtítulo ficam centralizados na tela
  data_aos = "fade-up" // Tipo de animação ao aparecer (usando a lib AOS), padrão é "fade-up"
}) => {
  return (
    // Container da seção que agrupa título e subtítulo
    <div 
      className={`mb-12 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`} 
      // 'mb-12' adiciona espaço abaixo do cabeçalho
      // 'max-w-3xl' limita a largura máxima (fica bonito em telas grandes)
      // Se 'centered' for true, centraliza tudo
      data-aos={data_aos}  // Aplica a animação com AOS
    >
      {/* Título da seção, com tamanho grande e cor primária */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
        {title} {/* Mostra o título passado na prop */}
      </h2>

      {/* Se o subtítulo existir, ele aparece logo abaixo */}
      {subtitle && (
        <p className="text-lg text-gray-600">
          {subtitle} {/* Mostra o subtítulo */}
        </p>
      )}
    </div>
  )
}

// Exporta o componente para poder usá-lo em outras partes do site (ex: na Home, na página de Planos, etc.)
export default SectionHeading
