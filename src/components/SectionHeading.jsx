// Componente que exibe um cabeçalho de seção (um título e, opcionalmente, um subtítulo)
const SectionHeading = ({ 
  title,      // Título principal da seção
  subtitle,   // Subtítulo opcional
  centered = false,  // Se true, centraliza o texto. Se false, deixa alinhado à esquerda
  data_aos = "fade-up" // Animação padrão para efeito de scroll (usando AOS)
}) => {
  return (
    <div 
      // Classe dinâmica:
      // Se "centered" for true, aplica centralização com "mx-auto text-center"
      className={`mb-12 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}
      // Ativa a animação quando a seção aparecer na tela
      data-aos={data_aos}
    >
      {/* Título principal */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
        {title}
      </h2>

      {/* Subtítulo (só aparece se tiver sido passado) */}
      {subtitle && (
        <p className="text-lg text-gray-600">{subtitle}</p>
      )}
    </div>
  )
}

// Exporta o componente para ser usado em outras páginas
export default SectionHeading
