// Componente funcional SectionHeading, que recebe props para personalizar título e subtítulo
const SectionHeading = ({ 
  title,  // Título da seção
  subtitle,  // Subtítulo opcional da seção
  centered = false,  // Define se o título e subtítulo serão centralizados
  data_aos = "fade-up"  // Define o tipo de animação (padrão é "fade-up")
}) => {
  return (
    // Container da seção, com classe condicional para centralizar o texto se 'centered' for verdadeiro
    <div 
      className={`mb-12 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}  // 'mb-12' adiciona margem inferior, 'max-w-3xl' limita a largura máxima
      data-aos={data_aos}  // Aplica a animação do AOS com o tipo especificado
    >
      {/* Título da seção */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
        {title}  {/* Exibe o título passado por props */}
      </h2>

      {/* Se houver subtítulo, exibe o subtítulo abaixo do título */}
      {subtitle && (
        <p className="text-lg text-gray-600">
          {subtitle}  {/* Exibe o subtítulo passado por props */}
        </p>
      )}
    </div>
  )
}

// Exporta o componente SectionHeading para ser utilizado em outras partes do projeto
export default SectionHeading
