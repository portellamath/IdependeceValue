// Importando o Link do React Router para navegação SPA
import { Link } from 'react-router-dom'

// Componente da seção Hero (a primeira seção "impactante" da home)
const HeroSection = () => {
  return (
    <section 
      className="relative pt-20 md:pt-32 pb-32 md:pb-48 overflow-hidden 
                 bg-gradient-to-br from-primary-500 to-primary-700 text-white"
    >
      {/* Fundo com padrão grid (sutil) usando SVG */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Define o padrão do grid */}
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          {/* Aplica o padrão na área inteira */}
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Conteúdo principal */}
      <div className="container relative">
        <div className="max-w-3xl">
          {/* Título principal com animação AOS */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            data-aos="fade-up"
          >
            Transforme Seu <span className="text-secondary-400">Futuro Financeiro</span>
          </h1>

          {/* Descrição (subtítulo) com leve atraso na animação */}
          <p 
            className="text-xl md:text-2xl mb-8 text-gray-200"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Soluções especializadas em gestão financeira que geram valor duradouro e crescimento sustentável para microempreendedores e profissionais autônomos em todo o Brasil.
          </p>

          {/* Botões de ação com animação e responsividade */}
          <div 
            className="flex flex-col sm:flex-row gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Botão primário */}
            <Link to="/contact" className="btn btn-primary">
              Comece Hoje
            </Link>

            {/* Botão secundário */}
            <Link to="/plans" className="btn bg-white text-primary-500 hover:bg-gray-100">
              Conheça Nossos Planos
            </Link>
          </div>
        </div>
      </div>

      {/* Onda decorativa na parte inferior da seção */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-12 md:h-16"
        >
          {/* Desenha a onda */}
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
               82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
               906.67,72,985.66,92.83c70.05,18.48,146.53,
               26.09,214.34,3V120H0V0C250,0,321.39,56.44,
               321.39,56.44Z" 
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}

// Exportando para uso na página principal
export default HeroSection
