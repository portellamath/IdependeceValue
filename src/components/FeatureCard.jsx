// Componente funcional chamado FeatureCard
// Ele recebe 4 props: icon (ícone da funcionalidade), title (título), 
// description (descrição) e delayIndex (índice para controlar o tempo do delay na animação)
const FeatureCard = ({ icon, title, description, delayIndex = 0 }) => {
  return (
    <div 
      // Estilização usando Tailwind CSS:
      // - bg-white: fundo branco
      // - p-6: padding interno de 1.5rem
      // - rounded-lg: bordas arredondadas
      // - shadow-card: sombra padrão
      // - hover:shadow-card-hover: aumenta a sombra ao passar o mouse (efeito hover)
      // - transition-shadow duration-300: anima a sombra em 300ms, para uma transição suave
      className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300"

      // AOS (Animate On Scroll) para animação quando o card aparece na tela
      // - data-aos="fade-up": anima o card "subindo" suavemente
      // - data-aos-delay: controla o atraso da animação
      // Exemplo: delayIndex 2 => 200ms de delay
      data-aos="fade-up"
      data-aos-delay={delayIndex * 100} 
    >
      {/* Bloco do ícone */}
      {/* Estilização: círculo colorido com o ícone centralizado */}
      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 text-primary-500 rounded-lg mb-4">
        {icon}
      </div>

      {/* Título da funcionalidade */}
      {/* Estilo: texto grande, negrito, e cor primária da marca */}
      <h3 className="text-xl font-semibold mb-3 text-primary-500">{title}</h3>

      {/* Descrição da funcionalidade */}
      {/* Estilo: texto normal em cinza claro, para contraste visual suave */}
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

// Exporta o componente para poder ser reutilizado em outras partes da aplicação
export default FeatureCard
